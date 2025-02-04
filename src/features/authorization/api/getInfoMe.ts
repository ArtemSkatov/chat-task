import { api } from "@/shared/api/apiService";
export const getInfoMe = () => {
  return api.profileList().then((response) => response.data);
};