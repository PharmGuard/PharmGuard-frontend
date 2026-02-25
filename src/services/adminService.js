import api from "../api/axios";
import toast from "react-hot-toast";
import { toastConfig } from "../utils/utils";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const adminService = {
  addEmployee: async (userData) => {
    try {
      const response = await api.post("/admin/add-employee", userData, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to add user";
      toast.error(errorMessage, toastConfig);
      throw error;
    }
  },

  getEmployees: async () => {
    const response = await api.get("/admin/employees", {
      headers: getAuthHeaders(),
    });
    return response.data;
  },

  getAuditLogs: async () => {
    const response = await api.get("/admin/audit-logs", {
      headers: getAuthHeaders(),
    });
    return response.data;
  },
};

export default adminService;
