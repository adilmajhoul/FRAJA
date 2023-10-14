import React from 'react';
import { Routes, Route, Link, useParams, useLocation } from 'react-router-dom'; // Import Link component
import { genres } from '../App';

import MappedPosterWithPages from './MappedPosterWithPages';

// import MoviePage from "./MoviePage";
export default function MyRoutes() {
  const location = useLocation();

  const basename = location.pathname;
  return (
    <div>
      <Routes basename={basename}>
        <Route
          path='/popular/:genre/:page'
          element={<MappedPosterWithPages />}
        />

        <Route path='/' element={<MappedPosterWithPages />} />

        {/* <Route path='popular/:genre/:page/:movieId' element={<MoviePage />} /> */}
      </Routes>
    </div>
  );
}
