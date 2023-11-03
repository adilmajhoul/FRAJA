import axios from 'axios';
import * as url from '../services/personalApi/urls';

export const checkAuthenticated = async () => {
  try {
    const token = localStorage.getItem('frajaToken');

    const response = await axios.get(`${url.URL}/profile?token=${token}`);

    if (response.data?.userId == '65428c5ac3a0a0dc18ad4ff4') {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
