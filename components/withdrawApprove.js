import axios from 'axios';

const API_BASE_URL = 'http://134.255.234.247:8800/api';

export const getMessageById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/withdraw/approve/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching message with ID ${id}:`, error);
    throw error;
  }
};
