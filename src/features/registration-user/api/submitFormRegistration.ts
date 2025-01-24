import { User } from "@/entities/user/types/user";
import { apiService } from "@/shared/api/apiService";


export const submitFormRegistration = (formData: User) => {
  return apiService.post("/register", formData).then(response => response.data);
};