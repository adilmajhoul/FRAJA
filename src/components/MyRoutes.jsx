import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom'; // Import Link component
import { englishGenresNameFirst as genres } from '../data/englishGenresNameFirst';

import MappedPosterWithPages from './MappedPosterWithPages';

// import MoviePage from "./MoviePage";
export default function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path='/popular/:genre/:page'
          element={<MappedPosterWithPages />}
        />

        {/* <Route path='/' element={<MappedPosterWithPages />} /> */}

        {/* <Route path='popular/:genre/:page/:movieId' element={<MoviePage />} /> */}
      </Routes>
    </div>
  );
}
