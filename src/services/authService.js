import api from "../api/axios";
import toast from "react-hot-toast";

const toastConfig = {
  position: "top-right",
  style: {
    background: "#fff",
    color: "#000",
  },
};

const authService = {
  // Login
  login: async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      toast.success("Login successful", toastConfig);
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed", toastConfig);
      throw error;
    }
  },

  // Setup password (first time with OTP)
  setupPassword: async (email, otp, newPassword) => {
    const response = await api.post("/auth/setup-password", {
      email,
      otp,
      newPassword,
    });
    return response.data;
  },

  // Forgot password (request OTP)
  forgotPassword: async (email) => {
    const response = await api.post("/auth/forgot-password", { email });
    return response.data;
  },

  // Reset password (with OTP)
  resetPassword: async (email, otp, newPassword) => {
    const response = await api.post("/auth/reset-password", {
      email,
      otp,
      newPassword,
    });
    return response.data;
  },

  // Verify email
  verifyEmail: async (email, otp) => {
    const response = await api.post("/auth/verify-email", { email, otp });
    return response.data;
  },

  // Get profile
  getProfile: async () => {
    const response = await api.get("/auth/profile");
    return response.data;
  },

  // Logout (client-side)
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};

export default authService;
