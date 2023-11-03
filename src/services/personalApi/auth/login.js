import axios from 'axios';
import * as url from '../urls';

export const login = async (formData) => {
  try {
    const response = await axios.post(url.LOG_IN, formData);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
