import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';
import { apiAuthToken } from '../../data/apiAuthToken';

import PosterCard from '../PosterCard';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useAtom } from 'jotai';
import {
  isTitleFiltering,
  shows,
  titles,
  title_query,
  byRatingMin,
  byRatingMax,
} from './atoms';

export default function MappedForFilter() {
  const [moviesList, setMoviesList] = useState([]);
  const { genre, page } = useParams();

  const [titleQuery, setTitleQuery] = useAtom(title_query);

  const [showsList, setShowsList] = useAtom(shows);
  const [showsTitles, setShowsTitles] = useAtom(titles);

  const [minRating, setMinRating] = useAtom(byRatingMin);
  const [maxRating, setMaxRating] = useAtom(byRatingMax);
  function ratingFilter(show) {
    return show.vote_average >= minRating && show.vote_average <= maxRating;
  }

  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1);
  const hasMoreData = useRef(true);

  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genres[genre]}&page=${currentPage}`
  //     );
  //     const data = res.data.results;

  //     if (data.length > 0) {
  //       setMoviesList((prevMovies) => [...prevMovies, ...data]);
  //       setCurrentPage(currentPage + 1);
  //     } else {
  //       hasMoreData.current = false;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   setCurrentPage(parseInt(page) || 1);
  //   setMoviesList([]); // Reset the movies list when the genre or page changes
  //   hasMoreData.current = true; // Reset hasMoreData to true

  //   fetchData();
  // }, [genre, page]);
  // ------------------
  async function fetchData(query) {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: `${query}`,
        include_adult: 'false',
        // language: 'en-US',
        page: `${currentPage}`,
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiAuthToken}`,
      },
    };

    try {
      const res = await axios.request(options);

      setShowsTitles([...res.data.results.map(({ title }) => title)]);

      const data = res.data.results;
      if (data.length > 0) {
        setShowsList((prevMovies) => [
          ...prevMovies,
          ...data.filter((show) => ratingFilter(show)),
        ]);
        setCurrentPage(currentPage + 1);
      } else {
        hasMoreData.current = false;
      }

      console.log(showsTitles);
    } catch (error) {
      console.error(error);
    }
  }
  // ------------------
  useEffect(() => {
    setCurrentPage(parseInt(page) || 1);
    setShowsList([]); // Reset the movies list when the genre or page changes
    hasMoreData.current = true; // Reset hasMoreData to true

    fetchData(titleQuery);
  }, [titleQuery, minRating, maxRating]);
  // ----------------

  return (
    <div>
      <span className='text-white'>filtered shows</span>

      <InfiniteScroll
        dataLength={setShowsList.length}
        next={fetchData}
        hasMore={hasMoreData.current}
        loader={<h4 className='text-white'>Loading...</h4>}
      >
        <div className='flex flex-wrap justify-center'>
          {showsList.map((show, idx) => (
            <PosterCard show={show} key={idx} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
