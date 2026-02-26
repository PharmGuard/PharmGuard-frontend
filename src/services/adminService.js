import api from "../api/axios";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const adminService = {
  addEmployee: (userData) => {
    return api
      .post("/admin/add-employee", userData, {
        headers: getAuthHeaders(),
      })
      .then((response) => response.data);
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
