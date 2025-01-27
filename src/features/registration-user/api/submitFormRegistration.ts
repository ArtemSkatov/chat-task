import { api } from "@/shared/api/apiService";
import { MainRegisterRequest } from "@/shared/api/generate/data-contracts";


export const submitFormRegistration = (formData: MainRegisterRequest) => {
  return api.registerCreate(formData).then(response => response.data);
};