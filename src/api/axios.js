import axios from "axios";

const API_BASE_URL = "https://pharmguard-backend-production.up.railway.app/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Handle response errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Prevent redirect loop:
      // 1. Check if the failed request was a login attempt
      // 2. Check if we are already on the login page
      const isLoginRequest = error.config?.url?.includes("login");
      const isLoginPage = window.location.pathname.includes("/auth/login");

      if (!isLoginRequest && !isLoginPage) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/auth/login";
      }
    }
    return Promise.reject(error);
  },
);

export default api;
