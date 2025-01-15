import axios from "axios";

const API_URL = "https://6787f78dc4a42c916108eae7.mockapi.io/api/ticket";

export const getStatuses = async () => {
  const response = await axios.get(`${API_URL}/Gitlab`);
  return response.data;
};
