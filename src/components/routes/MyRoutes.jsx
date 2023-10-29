import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom'; // Import Link component
import { englishGenresNameFirst as genres } from '../../data/englishGenresNameFirst';

import MappedPosterWithPages from '../MappedPosterWithPages';

import Search from '../search/Search';
import Login from '../auth/Login';
import Signup from '../auth/Signup';

import Profile from '../user/Profile';

import ShowPage from '../show/ShowPage';

export default function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/top/:showType/:genre/:page' element={<Search />} />
        <Route path='/' element={<Search />} />
        {/* authentification */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile/:firebaseId' element={<Profile />} />
        // movie page route
        <Route path='popular/:genre/:page/:movieId' element={<ShowPage />} />
      </Routes>
    </div>
  );
}
