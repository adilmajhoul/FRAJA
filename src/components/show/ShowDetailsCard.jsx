import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const api_key = '02f28b3981f36ac720b0db5678d678c5';

export default function ShowDetailsCard() {
  const { showType, movieId } = useParams();
  const [show, setShow] = useState(null);
  const [credits, setCredits] = useState(null);
  const [castIMDb, setCastIMDb] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${showType}/${movieId}?api_key=${api_key}&language=en-US`,
      );
      setShow(response.data);
    };

    const fetchCredits = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${showType}/${movieId}/credits?api_key=${api_key}&language=en-US`,
      );
      setCredits(response.data);

      const mainCast = response.data.cast.slice(0, 5);
      const castDetailsPromises = mainCast.map(actor =>
        axios.get(
          `https://api.themoviedb.org/3/person/${actor.id}?api_key=${api_key}&language=en-US`,
        ),
      );

      const castDetails = await Promise.all(castDetailsPromises);
      setCastIMDb(castDetails.map(details => details.data));
    };

    fetchShow();
    fetchCredits();
  }, [showType, movieId]);

  if (!show || !credits) {
    return <div className='text-center mt-20'>Loading...</div>;
  }

  const director =
    showType === 'movie'
      ? credits.crew.find(member => member.job === 'Director')
      : null;

  const mainCast = credits.cast.slice(0, 5); // Get top 5 cast members

  return (
    <div className=' bg-[#3d3d3d] rounded-3xl shadow-md text-gray-200 flex w-[98%] mx-auto mb-10'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <img
            className='h-full w-full object-cover md:w-64'
            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
            alt={show.title || show.name}
          />
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-red-400 font-semibold'>
            {show.release_date
              ? show.release_date.split('-')[0]
              : show.first_air_date.split('-')[0]}
          </div>
          <h1 className='block mt-1 text-lg leading-tight font-medium text-white hover:underline'>
            {show.title || show.name}
          </h1>
          <p className='mt-2 text-gray-400'>{show.overview}</p>
          <div className='mt-4'>
            <span className='text-gray-400'>Rating: </span>
            <span className='text-gray-200 font-semibold'>
              {show.vote_average}
            </span>
          </div>
          <div className='mt-4'>
            <span className='text-gray-400'>Genres: </span>
            <span className='text-gray-200 font-semibold'>
              {show.genres.map(genre => genre.name).join(', ')}
            </span>
          </div>
          <div className='mt-4'>
            <span className='text-gray-400'>Runtime: </span>
            <span className='text-gray-200 font-semibold'>
              {showType === 'movie'
                ? `${show.runtime} minutes`
                : `${show.episode_run_time[0]} minutes per episode`}
            </span>
          </div>
          {showType === 'movie' && (
            <>
              <div className='mt-4'>
                <span className='text-gray-400'>Budget: </span>
                <span className='text-gray-200 font-semibold'>
                  ${show.budget.toLocaleString()}
                </span>
              </div>
              <div className='mt-4'>
                <span className='text-gray-400'>Revenue: </span>
                <span className='text-gray-200 font-semibold'>
                  ${show.revenue.toLocaleString()}
                </span>
              </div>
              <div className='mt-4'>
                <span className='text-gray-400'>Director: </span>
                <span className='text-gray-200 font-semibold'>
                  {director ? director.name : 'N/A'}
                </span>
              </div>
            </>
          )}
          <div className='mt-4'>
            <span className='text-gray-400'>Main Cast: </span>
            <span className='text-gray-200 font-semibold'>
              {castIMDb.length > 0
                ? castIMDb
                    .map(actor => (
                      <a
                        key={actor.id}
                        href={`https://www.imdb.com/name/${actor.imdb_id}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:underline text-red-400'
                      >
                        {actor.name}
                      </a>
                    ))
                    .reduce((prev, curr) => [prev, ', ', curr])
                : 'Loading...'}
            </span>
          </div>
          <div className='mt-4'>
            <span className='text-gray-400'>Production Companies: </span>
            <span className='text-gray-200 font-semibold'>
              {show.production_companies
                .map(company => company.name)
                .join(', ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
