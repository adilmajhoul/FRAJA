import axios from "axios";
import * as url from "../urls";

export const createCollection = async (body) => {
  try {
    const response = await axios.post(url.CREATE_COLLECTION, body);

    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const deleteCollection = async (collectionId) => {
  try {
    const response = await axios.delete(
      `${url.DELETE_COLLECTION}/${collectionId}`,
    );

    return response.data;
  } catch (error) {
    return error.response;
  }
};

// deleteCollection
export const updateCollection = async (collectionId) => {
  try {
    const response = await axios.put(
      `${url.UPDATE_COLLECTION}/${collectionId}`,
    );

    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getCollectionShows = async (collectionId) => {
  try {
    const response = await axios.get(
      `${url.GET_COLLECTION_SHOWS}/${collectionId}`,
    );

    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getUserCollections = async () => {
  try {
    const response = await axios.get(url.GET_USER_COLLECTIONS);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
