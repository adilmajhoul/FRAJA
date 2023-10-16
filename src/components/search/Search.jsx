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
    <div className='mt-10'>
      <div className='text-[#aaa]'>Filter By:</div>

      <div
        className='font-semibold text-xl text-[#aaa] flex  mx-5   h-14
         flex-row justify-between items-center
       rounded-lg'
      >
        <div className='flex items-center'>
          <span className='pr-2 text-[#aaa]'>Tile</span>
          <FilterByTitle />
        </div>

        <div>
          <span className='pr-2'>Genre</span>
        </div>

        <div className='flex items-center'>
          <span className='pr-2'>Rating</span> <FilterByRating />
        </div>

        <div>
          <span className='pr-2'>Year</span>
        </div>

        <div>
          <span className='pr-2'>Tv-Movie</span>
        </div>
      </div>
      {titleFiltering && <MappedForFilter />}
      {isRatingFiltering && !titleFiltering && <MappedPosterWithPages />}
    </div>
  );
}
