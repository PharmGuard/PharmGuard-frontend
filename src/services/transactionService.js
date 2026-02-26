import api from "../api/axios";

const transactionService = {
  dispenseDrug: async (data) => {
    const response = await api.post("/transactions/dispense", data);
    return response.data;
  },

  getDispensingHistory: async () => {
    const response = await api.get("/transactions");
    return response.data;
  },
};

export default transactionService;
