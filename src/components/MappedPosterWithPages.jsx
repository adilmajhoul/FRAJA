import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { genres } from '../App';

import axios from 'axios';

import { apiKey } from '../data/apiKey';
import PosterCard from './PosterCard';
import PaginationButtons from './PaginationButtons';
// Create a cache object
const cache = {};

export default function MappedPosterWithPages() {
  const [moviesList, setMoviesList] = useState([]);
  const { genre, page } = useParams();

  useEffect(() => {
    async function fetchGenrePage() {
      try {
        // Check if the data is already in the cache
        if (cache[`${genre}-${page}`]) {
          setMoviesList(cache[`${genre}-${page}`]);
        } else {
          const res = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genres[genre]}&page=${page}`
          );
          const data = res.data.results;
          setMoviesList(data);

          // Store the data in the cache
          cache[`${genre}-${page}`] = data;
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchGenrePage();
  }, [genre, page]);

  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {moviesList &&
          moviesList.map((show, idx) => <PosterCard show={show} key={idx} />)}
      </div>
      {/* TODO: build a seperetae component for this pages buttons */}
      <PaginationButtons currentPage={page} currentGenre={genre} />
    </div>
  );
}
