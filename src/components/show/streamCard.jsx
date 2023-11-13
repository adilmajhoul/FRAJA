import React, { useEffect, useState } from 'react';
import { fetchByImdbIDYts } from '../../services/torrent/fetchTorent';
import Stream from './stream';

export default function StreamCard({ show }) {
  const [tor, setTor] = useState({});
  const [server, setServer] = useState({});

  const getServer = () => {
    if (tor?.data?.movie?.torrents) {
      setServer(tor.data.movie.torrents[0] || []);
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetchByImdbIDYts(show.imdb_id);
      console.log('API Response:', res);
      setTor(res);
    } catch (error) {
      console.error('Error fetching torrent data:', error);
    }
  };

  useEffect(() => {
    if (show) {
      fetchData();
    }
  }, [show]);

  useEffect(() => {
    getServer();
  }, [tor]);

  return (
    <div className='flex flex-row-reverse text-white border justify-between border-white w-full'>
      <ol>
        {tor?.data?.movie?.torrents &&
          tor.data.movie.torrents.map((item, idx) => (
            <li
              key={idx}
              onClick={() => setServer(tor.data.movie.torrents[idx] || {})}
              className='hover:bg-gray-500 cursor-pointer'
            >
              {item.hash}
            </li>
          ))}
      </ol>

      {server?.hash && (
        <div className='border border-red-600 flex grow items-center justify-center'>
          <Stream
            server={server}
            poster={`http://image.tmdb.org/t/p/w1280${show?.backdrop_path}`}
          />
        </div>
      )}

      {!server?.hash && (
        <div className='text-xl'>
          No Stream Sources Are Found Refresh The Page Or Look For Another Movie
        </div>
      )}
    </div>
  );
}
