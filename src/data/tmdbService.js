// // services/tmdbService.js

// import axios from "axios";

// const TMDB_API_KEY = "02f28b3981f36ac720b0db5678d678c5";
// const BASE_URL = "https://api.themoviedb.org/3";

// // 'https://api.themoviedb.org/3/discover/${showType}?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genreId}'

// const tmdbService = axios.create({
//   baseURL: BASE_URL,
//   params: {
//     api_key: TMDB_API_KEY,
//   },
// });

// export default async function getPopularMovies(page = 1, genre = 28) {
//   try {
//     const response = await tmdbService.get("/discover/movie", {
//       params: {
//         include_adult: "false",
//         include_video: "false",
//         language: "en-US",
//         page: page,
//         sort_by: "popularity.desc",
//         with_genres: genre,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

// // ------------------------------------

// // const options = {
// //   method: "GET",
// //   url: "https://api.themoviedb.org/3/discover/movie",
// //   params: {
// //     include_adult: "false",
// //     include_video: "false",
// //     language: "en-US",
// //     page: "1",
// //     sort_by: "popularity.desc",
// //     with_genres: "28",
// //   },
// //   headers: {
// //     accept: "application/json",
// //     Authorization: "Bearer 02f28b3981f36ac720b0db5678d678c5",
// //   },
// // };

// // axios
// //   .request(options)
// //   .then(function (response) {
// //     console.log(response.data);
// //   })
// //   .catch(function (error) {
// //     console.error(error);
// //   });
