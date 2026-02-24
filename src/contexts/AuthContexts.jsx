import React, { createContext, useState, useEffect } from "react";
import authService from "../services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login
  const login = async (email, password) => {
    const data = await authService.login(email, password);

    // Store token and user
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    setToken(data.token);
    setUser(data.user);

    return data;
  };

  // Logout
  const logout = () => {
    authService.logout();
    setToken(null);
    setUser(null);
  };

  // Setup password
  const setupPassword = async (email, otp, newPassword) => {
    return await authService.setupPassword(email, otp, newPassword);
  };

  // Forgot password
  const forgotPassword = async (email) => {
    return await authService.forgotPassword(email);
  };

  // Reset password
  const resetPassword = async (email, otp, newPassword) => {
    return await authService.resetPassword(email, otp, newPassword);
  };

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    setupPassword,
    forgotPassword,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
