import axios from 'axios';
import * as url from '../routes';

export const signup = async (formData) => {
  try {
    const response = await axios.post(url.SIGN_UP, formData);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
