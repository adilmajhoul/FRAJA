import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';
import PosterCard from './PosterCard';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useAtom } from 'jotai';
import { isTitleFiltering, byRatingMin, byRatingMax } from './search/atoms';
import { englishGenresNameFirst as genres } from '../data/englishGenresNameFirst';
import { apiKey } from '../data/apiKey';

export default function MappedPosterWithInfiniteScroll() {
  const [moviesList, setMoviesList] = useState([]);
  const { genre, page } = useParams();

  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1);
  const hasMoreData = useRef(true);

  const [titleFiltering, setTitleFiltering] = useAtom(isTitleFiltering);

  const [minRating, setMinRating] = useAtom(byRatingMin);
  const [maxRating, setMaxRating] = useAtom(byRatingMax);
  function ratingFilter(show) {
    return show.vote_average >= minRating && show.vote_average <= maxRating;
  }

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genres[genre]}&page=${currentPage}`
      );
      const data = res.data.results;

      if (data.length > 0) {
        setMoviesList((prevMovies) => [
          ...prevMovies,
          ...data.filter((show) => ratingFilter(show)),
        ]);

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
    setMoviesList([]); // Reset the movies list when the genre or page changes
    hasMoreData.current = true; // Reset hasMoreData to true

    fetchData();
  }, [genre, page, minRating, maxRating]);

  return (
    <div>
      {!titleFiltering && (
        <div>
          <span className='text-white'>default shows</span>
          <InfiniteScroll
            dataLength={moviesList.length}
            next={fetchData}
            hasMore={hasMoreData.current}
            loader={<h4 className='text-white'>Loading...</h4>}
          >
            <div className='flex flex-wrap justify-center'>
              {moviesList.map((show, idx) => (
                <PosterCard show={show} key={idx} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
}
