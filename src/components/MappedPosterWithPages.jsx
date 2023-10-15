import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { genres } from '../App';
import axios from 'axios';
import { apiKey } from '../data/apiKey';
import PosterCard from './PosterCard';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function MappedPosterWithInfiniteScroll() {
  const [moviesList, setMoviesList] = useState([]);
  const { genre, page } = useParams();

  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1);
  const hasMoreData = useRef(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genres[genre]}&page=${currentPage}`
      );
      const data = res.data.results;

      if (data.length > 0) {
        setMoviesList((prevMovies) => [...prevMovies, ...data]);
        setCurrentPage(currentPage + 1);
      } else {
        hasMoreData.current = false;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setCurrentPage(parseInt(page) || 1);
    setMoviesList([]);
    hasMoreData.current = true;

    fetchData();
  }, [genre, page]);

  return (
    <div>
      <InfiniteScroll
        dataLength={moviesList.length}
        next={fetchData}
        hasMore={hasMoreData.current}
        loader={<h4>Loading...</h4>}
      >
        <div className='flex flex-wrap justify-center'>
          {moviesList.map((show, idx) => (
            <PosterCard show={show} key={idx} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

// export default function MappedPosterWithPages() {
//   const [moviesList, setMoviesList] = useState([]);
//   const { genre, page } = useParams();

//   useEffect(() => {
//     async function fetchGenrePage() {
//       try {
//         // Check if the data is already in the cache
//         if (cache[`${genre}-${page}`]) {
//           setMoviesList(cache[`${genre}-${page}`]);
//         } else {
//           const res = await axios.get(
//             `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genres[genre]}&page=${page}`
//           );
//           const data = res.data.results;
//           setMoviesList(data);

//           // Store the data in the cache
//           cache[`${genre}-${page}`] = data;
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchGenrePage();
//   }, [genre, page]);

//   return (
//     <div>
//       <div className='flex flex-wrap justify-center'>
//         {moviesList &&
//           moviesList.map((show, idx) => <PosterCard show={show} key={idx} />)}
//       </div>
//       {/* TODO: build a seperetae component for this pages buttons */}
//       <PaginationButtons currentPage={page} currentGenre={genre} />
//     </div>
//   );
// }
