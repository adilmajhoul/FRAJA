import axios from 'axios';
import * as url from '../urls';

export const getLists = async (user) => {
  try {
    const response = await axios.post(url.LOG_IN, formData);

    return response.data;
  } catch (error) {
    return error.response;
  }
};

// addMovieToList or collection

// removeMovieFromList or collection
