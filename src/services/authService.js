import api from "../api/axios";

const authService = {
  // Login
  login: async (email, password) => {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
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
