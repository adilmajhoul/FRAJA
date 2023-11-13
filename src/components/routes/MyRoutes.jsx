import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom'; // Import Link component
import { englishGenresNameFirst as genres } from '../../data/englishGenresNameFirst';

import MappedPosterWithPages from '../mappedPoster/MappedPosterWithPages';

import Search from '../search/Search';
import Login from '../auth/Login';
import Signup from '../auth/Signup';

import ShowPage from '../show/ShowPage';
import Profile from '../profile/Profile';
import { checkAuthenticated } from '../../utils/checkAuthenticated';
import axios from 'axios';
import ProtectedRoute from './ProtectedRoute';
export default function MyRoutes() {
  const [isAllowed, setIsAllowed] = useState(undefined);

  return (
    <div>
      <Routes>
        <Route path='/top/:showType/:genre/:page' element={<Search />} />
        <Route path='/' element={<Search />} />
        {/* authentification */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/profile/:firebaseId' element={<Profile />} /> */}

        {/* movie page route */}
        <Route
          path='top/:showType/:genre/:page/:movieId'
          element={<ShowPage />}
        />
        {/* protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/profile/:userId' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}
