import { useEffect, useState } from 'react';

const imageConfig = {
  base_url: 'http://image.tmdb.org/t/p/',
  secure_base_url: 'https://image.tmdb.org/t/p/',
  backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
  logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
  poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  profile_sizes: ['w45', 'w185', 'h632', 'original'],
  still_sizes: ['w92', 'w185', 'w300', 'original'],
};

export default function Stream({ server, poster }) {
  const runWebTor = () => {
    // Check if the Webtor script is loaded
    if (window.webtor) {
      // Clear the existing player container
      const playerContainer = document.getElementById('player');
      playerContainer.innerHTML = '';

      window.webtor.push({
        width: '100%',
        id: 'player',
        magnet: server.hash,
        on: function (e) {
          if (e.name === window.webtor.TORRENT_FETCHED) {
            console.log('Torrent fetched!', e.data);
          }
          if (e.name === window.webtor.TORRENT_ERROR) {
            console.log('Torrent error!');
          }
        },
        poster: poster || '',
        subtitles: [
          {
            srclang: 'en',
            label: 'test',
            src: 'https://raw.githubusercontent.com/andreyvit/subtitle-tools/master/sample.srt',
            default: true,
          },
        ],
        lang: 'en',
        i18n: {
          en: {
            common: {
              'prepare to play': 'Preparing Video Stream... Please Wait...',
            },
            stat: {
              seeding: 'Seeding',
              waiting: 'Client initialization',
              'waiting for peers': 'Waiting for peers',
              from: 'from',
            },
          },
        },
      });
    }
  };
  useEffect(() => {
    runWebTor();
  }, [server]);

  return <div id='player' className='webtor w-full' />;
}
