import api from "../api/axios";

const authService = {
  // Login
  login: async (email, password) => {
    // TEMPORARY MOCK: Bypass backend authentication to unblock development
    // TODO: Revert this when backend credentials are fixed
    return new Promise((resolve) => {
      setTimeout(() => {
        let role = "admin";
        if (email.includes("pharmacist")) role = "pharmacist";
        if (email.includes("storekeeper")) role = "storekeeper";

        resolve({
          user: {
            id: "1",
            name: "Test User",
            email: email,
            role: role,
          },
          token: "mock-jwt-token-12345",
        });
      }, 1000);
    });
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
    // Mock profile fetch to prevent 401 errors with the mock token
    return new Promise((resolve) => {
      const user = JSON.parse(localStorage.getItem("user"));
      resolve(user || { name: "Test User", email: "test@example.com" });
    });
  },

  // Logout (client-side)
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};

export default authService;
