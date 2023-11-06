import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PosterCard from "./posterCard/PosterCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAtom } from "jotai";
import {
  isTitleFiltering,
  byRatingMin,
  byRatingMax,
  catchRandomGenre,
  catchRandomPage,
} from "./search/atoms";
import { englishGenresNameFirst as genres } from "../data/englishGenresNameFirst";
import { apiKey } from "../data/apiKey";
import randomFetch from "../utils/randomFetch";

export default function MappedPosterWithInfiniteScroll() {
  const [moviesList, setMoviesList] = useState([]);
  const { showType, genre, page } = useParams();
  const [loading, setLoading] = useState(true);

  const [randomGenre, setRandomGenre] = useAtom(catchRandomGenre);
  const [randomPage, setRandomPage] = useAtom(catchRandomPage);

  // Initialize random page and genre if not provided
  useEffect(() => {
    if (!genre) setRandomGenre(randomFetch("genre"));
    if (!page) setRandomPage(randomFetch("page"));
  }, [genre, page]);

  const [currentPage, setCurrentPage] = useState(
    parseInt(page, 10) || randomPage,
  );
  const hasMoreData = useRef(true);

  const [titleFiltering] = useAtom(isTitleFiltering);
  const [minRating] = useAtom(byRatingMin);
  const [maxRating] = useAtom(byRatingMax);

  function ratingFilter(show) {
    return show.vote_average >= minRating && show.vote_average <= maxRating;
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const genreId = genres[genre] || randomGenre;
      const pageToFetch = currentPage || randomPage;
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/${
          showType || "movie"
        }?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genreId}&page=${pageToFetch}`,
      );
      const data = response.data.results;

      if (data.length > 0) {
        setMoviesList((prevMovies) => [
          ...prevMovies,
          ...data.filter(ratingFilter),
        ]);
        setCurrentPage((prevPage) => prevPage + 1);
      } else {
        hasMoreData.current = false;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Effect to reset and fetch data when parameters change
  useEffect(() => {
    setMoviesList([]); // Reset the movies list
    setCurrentPage(parseInt(page, 10) || 1); // Reset the current page
    hasMoreData.current = true; // Ensure we can fetch more data
    fetchData(); // Fetch new data
  }, [genre, page, showType, minRating, maxRating]);

  // Loading state UI
  if (loading) {
    return <h4 className="text-white">Loading...</h4>;
  }

  return (
    <div>
      {!titleFiltering && (
        <InfiniteScroll
          dataLength={moviesList.length}
          next={fetchData}
          hasMore={hasMoreData.current}
          loader={<h4 className="text-white">Loading...</h4>}
        >
          <div className="flex flex-wrap justify-center">
            {moviesList.map((show, idx) => (
              <PosterCard show={show} key={show.id || idx} /> // Use show.id when available for a stable key
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}
