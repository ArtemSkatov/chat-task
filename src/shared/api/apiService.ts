
import { Api } from "./generate/Api";

// export const apiService = axios.create({ baseURL: import.meta.env.VITE_API });
export const api = new Api({ baseURL: import.meta.env.VITE_API });
