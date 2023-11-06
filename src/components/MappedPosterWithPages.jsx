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
  const { showType, genre } = useParams(); // We keep using genre from params
  const [loading, setLoading] = useState(true);
  const hasMoreData = useRef(true);

  // Atoms
  const [titleFiltering] = useAtom(isTitleFiltering);
  const [minRating] = useAtom(byRatingMin);
  const [maxRating] = useAtom(byRatingMax);

  // Random page and genre management
  const [randomGenre, setRandomGenre] = useAtom(catchRandomGenre);
  const [randomPage, setRandomPage] = useAtom(catchRandomPage);

  // Current page management
  const [currentPage, setCurrentPage] = useState(1);

  // Rating filter function
  function ratingFilter(show) {
    return show.vote_average >= minRating && show.vote_average <= maxRating;
  }

  // Fetch data function
  const fetchData = async () => {
    setLoading(true); // Set loading to true whenever we start a new fetch
    try {
      const genreId = genres[genre] || randomGenre;
      const pageToFetch = currentPage || randomPage;
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/${
          showType || "movie"
        }?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genreId}&page=${pageToFetch}`,
      );
      const data = res.data.results;

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
      setLoading(false); // Set loading to false once data is fetched or an error occurs
    }
  };

  // Initial data fetch and setup
  useEffect(() => {
    // If genre is not specified, get a random one
    if (!genre) {
      setRandomGenre(randomFetch("genre"));
    }

    // If page is not specified, get a random one
    setRandomPage(randomFetch("page"));

    // Reset the movies list and current page whenever the genre or showType changes
    setMoviesList([]);
    setCurrentPage(1);
    hasMoreData.current = true;

    fetchData(); // Fetch initial data

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre, showType]);

  // Component UI
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
              <PosterCard show={show} key={show.id || idx} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}
