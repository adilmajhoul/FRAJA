import axios from "axios";
import * as url from "../urls";

export const getLists = async (user) => {
  try {
    const response = await axios.post(url.LOG_IN, formData);

    return response.data;
  } catch (error) {
    return error.response;
  }
};

// addMovieToList or collection
export const login = async (data) => {
  try {
    const response = await axios.post(url.LOG_IN, data);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
// removeMovieFromList or collection
export const login = async (data) => {
  try {
    const response = await axios.post(url.LOG_IN, data);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
