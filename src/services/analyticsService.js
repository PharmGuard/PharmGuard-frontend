import api from "../api/axios";

const analyticsService = {
  getDashboardAnalytics: async () => {
    const response = await api.get("/analytics/dashboard");
    return response.data;
  },
  getDrugForecast: async (drugId) => {
    const response = await api.get(`/analytics/drug/${drugId}`);
    return response.data;
  },
};

export default analyticsService;
