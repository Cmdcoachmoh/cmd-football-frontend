import axios, { type InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://cmd-football-backend-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // optional: for auth cookies
});

// Optional interceptor for logging or token injection
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  console.log(`[CMD API] ${config.method?.toUpperCase()} → ${config.url}`);
  return config;
});

export default api;

