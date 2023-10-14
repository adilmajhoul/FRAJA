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

function PosterCard({ show }) {
  const [isOpen, setIsOpen] = useState(false);

  const { genre, page } = useParams();

  function getPoster(posterId) {
    return `${imageConfig.base_url}/${imageConfig.poster_sizes[3]}${posterId}`;
  }

  function getGenres(ids) {
    return ids.map((id) => englishGenresIdFirst[id]);
  }
  return (
    <Link to={`/popular/${genre}/${page}/${show.id}`}>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`group m-4 flex  h-[300px] w-[200px] flex-col justify-between rounded-xl border  border-red-600 text-right hover:cursor-pointer`}
      >
        {/* link */}
        <div
          className='h-full  w-full rounded-xl bg-contain bg-cover'
          style={{
            backgroundImage: `url(${getPoster(show.poster_path)})`,
          }}
        >
          {isOpen && (
            <div className='h-full flex-col rounded-xl border bg-red-500 bg-opacity-0 text-sm font-semibold text-white group-hover:bg-opacity-40  '>
              <div className='m-2 flex h-full flex-col justify-between'>
                <div className='flex flex-col text-sm font-semibold'>
                  {/* genres ----------------------------------------- */}
                  <div className=' flex flex-col items-end'>
                    {getGenres(show.genre_ids).map((genre) => (
                      <span className='h-fit rounded-full my-[1px]  px-[3px] text-black bg-[#ffcc26] w-min'>
                        {genre}
                      </span>
                    ))}

                    <span className='flex items-center h-min rounded-full my-[1px] py-[1px] px-[3px] text-black bg-[#ffcc26] w-min'>
                      {show.vote_average}
                      <span className=' mx-1'>★</span>
                    </span>
                    <span className='w-auto h-fit rounded-full my-[1px] py-[1px] px-[3px] text-black bg-[#ffcc26] w-min'>
                      votes: {show.vote_count}
                    </span>
                  </div>
                  {/* ----------------------------------------- */}
                </div>
                <div className='bg-gradient-to-t from-gray-500 group-hover:bg-opacity-50 w-full border border-green-600 mx-2 mb-8 flex justify-center text-left text-lg font-semibold'>
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
