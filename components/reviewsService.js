import axios from 'axios';

const API_BASE_URL = 'http://134.255.234.247:8800/api';

export const getGigs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching gigs:', error);
    throw error;
  }
};
