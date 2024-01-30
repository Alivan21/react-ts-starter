import axios from "axios";
import { cookies } from "./cookies";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

httpClient.interceptors.request.use(
  config => {
    const token = cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);
