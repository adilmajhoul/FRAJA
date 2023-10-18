import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom'; // Import Link component
import { englishGenresNameFirst as genres } from '../../data/englishGenresNameFirst';

import MappedPosterWithPages from '../MappedPosterWithPages';
// import MoviePage from "./MoviePage";

import Search from '../search/Search';
import Login from '../auth/Login';
export default function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/popular/:genre/:page' element={<Search />} />

        <Route path='/' element={<Search />} />

        {/* <Route path='popular/:genre/:page/:movieId' element={<MoviePage />} /> */}

        {/* authentification */}
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}
