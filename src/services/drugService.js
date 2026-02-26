import api from "../api/axios";

const drugService = {
  getAllDrugs: async () => {
    const response = await api.get("/drugs");
    return response.data;
  },
};

export default drugService;
