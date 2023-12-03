import axios from 'axios';

const API_BASE_URL = 'http://134.255.234.247:8800/api';

export const getDisputes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/disputes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching disputes:', error);
    throw error;
  }
};
