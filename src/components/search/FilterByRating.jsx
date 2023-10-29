import React, { useState } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';

import { useAtom } from 'jotai';
import { byRatingMin, byRatingMax, isRatingFiltering } from './atoms';

export default function FilterByRating() {
  const [ratingFiltering, setRatingFiltering] = useAtom(isRatingFiltering);

  const [minRating, setMinRating] = useAtom(byRatingMin);
  const [maxRating, setMaxRating] = useAtom(byRatingMax);

  const handleInput = (e) => {
    setMinRating(e.minValue);
    setMaxRating(e.maxValue);
  };

  return (
    <div>
      <MultiRangeSlider
        className='h-12 w-48'
        min={0}
        max={10}
        step={1}
        minValue={minRating}
        maxValue={maxRating}
        // onInput={(e) => {
        //   //   setRatingFiltering(true);
        //   handleInput(e);
        // }}
        onChange={(e) => {
          setRatingFiltering(true);

          handleInput(e);
        }}
      />
    </div>
  );
}
