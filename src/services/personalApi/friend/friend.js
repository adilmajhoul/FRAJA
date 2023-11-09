import axios from "axios";
import * as url from "../urls";

// getFriends
export const login = async (data) => {
  try {
    const response = await axios.post(url.LOG_IN, data);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
// addFriend
export const login = async (data) => {
  try {
    const response = await axios.post(url.LOG_IN, data);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
// deleteFriend
export const login = async (data) => {
  try {
    const response = await axios.post(url.LOG_IN, data);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
