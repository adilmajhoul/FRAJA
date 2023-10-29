import React, { useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { englishGenresIdFirst } from '../data/englishGenresIdFirst';
const imageConfig = {
  base_url: 'http://image.tmdb.org/t/p/',
  secure_base_url: 'https://image.tmdb.org/t/p/',
  backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
  logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
  poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  profile_sizes: ['w45', 'w185', 'h632', 'original'],
  still_sizes: ['w92', 'w185', 'w300', 'original'],
};

import { useAtom } from 'jotai';
import { catchRandomGenre, catchRandomPage } from './search/atoms';

function PosterCard({ show }) {
  const [isOpen, setIsOpen] = useState(false);

  const { genre, page, showType } = useParams();

  function getPoster(posterId) {
    return `${imageConfig.base_url}/${imageConfig.poster_sizes[3]}${posterId}`;
  }

  function getGenres(ids) {
    return ids.map((id) => englishGenresIdFirst[id]);
  }
  function parseYear(yearString) {
    return yearString.split('-')[0];
  }

  const [randomGenre, setRandomGenre] = useAtom(catchRandomGenre);
  const [randomPage, setRandomPage] = useAtom(catchRandomPage);
  return (
    // set movie page route to url params or randome in case of intering to movie  from home
    <Link
      to={`/top/${showType || 'movie'}/${
        genre || englishGenresIdFirst[randomGenre]
      }/${page || randomPage}/${show.id}`}
    >
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`group m-4 flex  h-[400px] w-[300px] flex-col justify-between rounded-xl text-right hover:cursor-pointer`}
      >
        {/* link */}
        <div
          className='h-full  w-full rounded-xl bg-contain bg-cover'
          style={{
            backgroundImage: `url(${getPoster(show.poster_path)})`,
          }}
        >
          {isOpen && (
            <div className='h-full flex-col rounded-xl bg-red-900 bg-opacity-0 text-sm font-semibold text-white group-hover:bg-opacity-70'>
              <div className='p-2 flex h-full flex-col justify-between'>
                <div className='flex flex-col text-sm font-semibold'>
                  {/* genres ----------------------------------------- */}
                  <div className=' flex flex-col items-end'>
                    {getGenres(show.genre_ids).map((genre) => (
                      <span className='whitespace-nowrap h-fit rounded-full my-[1px]  px-[3px] text-black bg-[#ffcc26] w-min'>
                        {genre}
                      </span>
                    ))}

                    <span className='whitespace-nowrap w-fit h-fit rounded-full my-[1px] py-[1px] px-[3px] text-black bg-[#ffcc26] w-min'>
                      Votes: {show.vote_count}
                    </span>

                    <span className='whitespace-nowrap flex items-center h-min rounded-full my-[1px] py-[1px] px-[3px] font-extrabold text-black bg-[#ffcc26] w-min'>
                      {show.vote_average}
                    </span>

                    <span className='whitespace-nowrap w-fit h-fit rounded-full my-[1px] py-[1px] px-[3px] text-black bg-[#ffcc26] w-min'>
                      Year:{' '}
                      {parseYear(show.release_date || show.first_air_date)}
                    </span>
                  </div>
                  {/* ----------------------------------------- */}
                </div>
                <div className='w-full px-2 pb-4 flex justify-center text-left text-xl font-extrabold'>
                  <div className=''>{show.title}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default PosterCard;
