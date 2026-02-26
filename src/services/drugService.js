import api from "../api/axios";

const drugService = {
  getAllDrugs: async () => {
    const response = await api.get("/drugs");
    return response.data;
  },
  addDrug: async (drugData) => {
    const response = await api.post("/drugs", drugData);
    return response.data;
  },
};

export default drugService;
