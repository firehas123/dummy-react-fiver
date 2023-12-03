// gigsService.js
import axios from 'axios';
import { API_BASE_URL } from './utils/constants.js';

export const getGigs = async () => {
  try {
    console.log("data"+ API_BASE_URL);
    const response = await axios.get(`${API_BASE_URL}/gigs`);
    //const response = await axios.get(`http://134.255.234.247:8800/api/gigs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching gigs:', error);
    throw error;
  }
};
