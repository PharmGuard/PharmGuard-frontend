import api from "../api/axios";

const analyticsService = {
  getDashboardAnalytics: async () => {
    const response = await api.get("/analytics/dashboard");
    return response.data;
  },
};

export default analyticsService;
