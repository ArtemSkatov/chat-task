import { api } from "@/shared/api/apiService";

export const logout = () => {
  return api.logoutCreate().then(response => response.data);
};