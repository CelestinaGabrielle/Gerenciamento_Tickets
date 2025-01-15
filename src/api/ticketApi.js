import axios from "axios";

const API_URL = "https://6787f78dc4a42c916108eae7.mockapi.io/api/ticket";

export const getTickets = async () => {
  const response = await axios.get(`${API_URL}/Ticket`);
  return response.data;
};

export const createTicket = async (ticket) => {
  const response = await axios.post(`${API_URL}/Ticket`, ticket);
  return response.data;
};

export const updateTicket = async (id, updates) => {
  const response = await axios.put(`${API_URL}/Ticket/${id}`, updates);
  return response.data;
};

export const deleteTicket = async (id) => {
  await axios.delete(`${API_URL}/Ticket/${id}`);
};
