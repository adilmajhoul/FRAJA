// deprecate this component

import React from 'react';
import FilterByTitle from './FilterByTitle';
import FilterByRating from './FilterByRating';
import { useAtom } from 'jotai';
import { isTitleFiltering, isRatingFiltering, shows } from './atoms';

import MappedPosterWithPages from '../mappedPoster/homeMovies';
import MappedForFilter from './MappedForFilter';
import TopMovies from '../mappedPoster/topMovies';
import FilterBar from './filterBar';
export default function Search() {
  const [titleFiltering, setFiltering] = useAtom(isTitleFiltering);
  const [ratingFiltering, setRatingFiltering] = useAtom(isRatingFiltering);

  const [showsList, setShowsList] = useAtom(shows);

  return (
    <div>
      <FilterBar />
      {titleFiltering && <MappedForFilter />}
      {/* TODO: check why did not work later or not ? :D */}
      <TopMovies />
    </div>
  );
}
