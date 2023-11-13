import axios from 'axios';
import * as url from '../urls';

// get user
export const getuser = async (userId) => {
  try {
    const response = await axios.get(`${url.GET_USER}/${userId}`);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
