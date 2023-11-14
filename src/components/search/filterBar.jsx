import React from 'react';
import FilterByRating from './FilterByRating';
import FilterByTitle from './FilterByTitle';

export default function FilterBar() {
  return (
    <div className='bg-gray-700 font-semibold text-xl text-gray-300 flex mx-5 h-14 flex-row justify-between items-center rounded-lg'>
      <div className='flex items-center'>
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
  );
}
