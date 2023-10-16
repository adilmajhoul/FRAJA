import React from 'react';
import FilterByTitle from './FilterByTitle';
import FilterByRating from './FilterByRating';
import { useAtom } from 'jotai';
import { isTitleFiltering, isRatingFiltering, shows } from './atoms';

import MappedPosterWithPages from '../MappedPosterWithPages';
import MappedForFilter from './MappedForFilter';
export default function Search() {
  const [titleFiltering, setFiltering] = useAtom(isTitleFiltering);
  const [ratingFiltering, setRatingFiltering] = useAtom(isRatingFiltering);

  const [showsList, setShowsList] = useAtom(shows);

  return (
    <div>
      <div
        className='divide-x divide-red-700 mt-10 mx-5 text-[#aaa] border-2 h-14
       border-red-600 flex flex-row justify-between items-center
       rounded-lg'
      >
        <div>
          <FilterByTitle />
        </div>

        <div>by genre</div>

        <FilterByRating />

        <div>by year</div>

        <div>tv || movie</div>

        <button
          className='hover:bg-red-700'
          onClick={() => {
            setFiltering(true);
            console.log('filtering->', filtering);
          }}
        >
          Filter
        </button>
      </div>
      {titleFiltering && <MappedForFilter />}
      {isRatingFiltering && !titleFiltering && <MappedPosterWithPages />}
    </div>
  );
}
