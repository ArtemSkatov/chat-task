import { api } from "@/shared/api/apiService";

export const refreshToken = () => {
  return api.refreshCreate().then(response => {
    return response.data;
  });
};