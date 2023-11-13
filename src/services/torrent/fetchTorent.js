import axios from 'axios';

export const fetchByImdbIDYts = async (imdbId) => {
  try {
    const response = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?imdb_id=${imdbId}`
    );

    return response.data;
  } catch (error) {
    return error.response;
  }
};
