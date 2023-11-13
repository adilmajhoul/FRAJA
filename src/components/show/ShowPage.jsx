import React, { useEffect, useState } from 'react';
import ShowDetailsCard from './ShowDetailsCard';
import CommentsCard from './CommentsCard';
import { useParams } from 'react-router-dom';
import { fetchSingleMovie } from '../../services/tmdbApi/tmdb';
import { apiKey } from '../../data/apiKey';
import StreamCard from './streamCard';

export default function ShowPage() {
  const [show, setShow] = useState({});
  const { movieId } = useParams();

  const fetchData = async () => {
    try {
      const res = await fetchSingleMovie(movieId, apiKey);
      console.log('API Response:', res);
      setShow(res);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [movieId]);

  return (
    <div className='h-screen flex flex-col justify-between text-white'>
      <ShowDetailsCard />
      <StreamCard show={show} />
      <CommentsCard />
    </div>
  );
}
