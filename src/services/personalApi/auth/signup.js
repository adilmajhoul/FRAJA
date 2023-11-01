import axios from 'axios';
import * as url from '../routes';

export const signup = (formData) => {
  return axios
    .post(url.SIGN_UP, formData)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      return err.response;
    });
};
