import axios from "axios";
import * as url from "../urls";

// getComments (use req.query to filter user= or show=)
export const login = async (data) => {
  try {
    const response = await axios.post(url.LOG_IN, data);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
// addComment to movie
export const login = async (data) => {
  try {
    const response = await axios.post(url.LOG_IN, data);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
// deleteComment from movie
export const login = async (data) => {
  try {
    const response = await axios.post(url.LOG_IN, data);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
// updateComment of movie
export const login = async (data) => {
  try {
    const response = await axios.post(url.LOG_IN, data);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
