import store from "@/app/store/store";
import { Api } from "./generate/Api";
import { clearSliceUser, loginUser } from "@/entities/user/model/userSlice";
import { logout } from "@/features/logout/api/logout";
import { refreshToken } from "@/features/authorization/api/refreshToken";

// export const apiService = axios.create({ baseURL: import.meta.env.VITE_API });
export const api = new Api({ baseURL: import.meta.env.VITE_API });

api.instance.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.user.token;
  config.withCredentials = true;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry && error.request.responseURL !== "http://localhost:8080/api/refresh") {
      originalRequest._retry = true;
      // Попытка обновить токен (если реализована логика refresh)
      try {
        // Например, запрос на endpoint обновления токена
        const data = await refreshToken();
        store.dispatch(loginUser(data));
        originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
        return api.instance(originalRequest);
      } catch (err) {
        // Если обновление токена не удалось, выполняем логаут
        await logout();
        store.dispatch(clearSliceUser());
        // Можно также перенаправить на страницу логина
      }
    }
    return Promise.reject(error);
  }
);
