import { User } from "@/entities/user/types/user";
import { apiService } from "@/shared/api/apiService";

export const submitFormLogin = (formData: User) => {
  return apiService.post("/login", formData).then(response => response.data);
};