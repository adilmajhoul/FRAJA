import axios from "axios";

export const fetchSingleMovie = async (showId, apiKey) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${showId}?api_key=${apiKey}`,
    );

    return res.data;
  } catch (error) {
    return error.response;
  }
};
