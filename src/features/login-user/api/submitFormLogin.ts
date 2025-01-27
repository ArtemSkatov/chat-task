
import { api } from "@/shared/api/apiService";
import { MainLoginRequest } from "@/shared/api/generate/data-contracts";

export const submitFormLogin = (formData: MainLoginRequest) => {
  return api.loginCreate(formData).then(response => response.data);
};