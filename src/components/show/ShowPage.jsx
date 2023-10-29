import React from 'react';

import ShowDetailsCard from './ShowDetailsCard';
import StreamCard from './StreamCard';
import CommentsCard from './CommentsCard';
import SimillarShows from './SimillarShows';

export default function ShowPage() {
  return (
    <div className='mt-10 flex flex-col h-screen justify-between items-center '>
      <div className='text-white'>this is: MoviePage</div>
      <ShowDetailsCard />
      <StreamCard />
      <CommentsCard />
      <SimillarShows />
    </div>
  );
}
