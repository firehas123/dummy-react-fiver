import axios from 'axios';

const API_BASE_URL = 'http://134.255.234.247:8800/api';

export const getNotifications = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/notifications`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};
