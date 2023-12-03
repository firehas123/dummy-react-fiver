import axios from 'axios';

const API_BASE_URL = 'http://134.255.234.247:8800/api';

export const createPaymentById = async (id) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create-payment/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error creating payment for ID ${id}:`, error);
    throw error;
  }
};
