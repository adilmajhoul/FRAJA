import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Link component

import Login from '../auth/Login';
import Signup from '../auth/Signup';

import ShowPage from '../show/ShowPage';
import Profile from '../profile/Profile';
import ProtectedRoute from './ProtectedRoute';
import TopMovies from '../mappedPoster/topMovies';
import HomeMovies from '../mappedPoster/homeMovies';

export default function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/top/:showType/:genre/:page' element={<TopMovies />} />
        <Route path='/' element={<HomeMovies />} />

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

// export default function MyRoutes() {
//   return (
//     <div>
//       <Routes>
//         <Route path='/top/:showType/:genre/:page' element={<TopMovies />} />
//         <Route path='/' element={<HomeMovies />} />

//         {/* authentification */}
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />

//         {/* <Route path='/profile/:firebaseId' element={<Profile />} /> */}

//         {/* movie page route */}

//         <Route path='/:showType/:genre/:page/:movieId' element={<ShowPage />} />

//         {/* protected routes */}
//         <Route element={<ProtectedRoute />}>
//           <Route path='/profile/:userId' element={<Profile />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }
