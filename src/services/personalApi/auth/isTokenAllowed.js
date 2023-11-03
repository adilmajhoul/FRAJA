import axios from 'axios';
import * as url from '../urls';

export const isTokenAllowed = async (token) => {
  try {
    if (!token) return false;

    const response = await axios.get(`${url.TOKEN}${token}`);

    const currentUser = { _id: '654170e693dc3bcf415f9a02' };

    console.log('response:', response);

    // return true or false
    return response.data.userId == currentUser._id;
  } catch (error) {
    return error.response;
  }
};
