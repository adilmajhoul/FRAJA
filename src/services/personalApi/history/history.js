import axios from "axios";
import * as url from "../urls";

// getHistory
export const login = async (data) => {
  try {
    const response = await axios.post(url.LOG_IN, data);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
// addHistroy
export const login = async (data) => {
  try {
    const response = await axios.post(url.LOG_IN, data);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
// deleteHistroyUnit
export const login = async (data) => {
  try {
    const response = await axios.post(url.LOG_IN, data);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
// deleteAllHistory
export const login = async (data) => {
  try {
    const response = await axios.post(url.LOG_IN, data);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
