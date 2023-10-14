import { useState, Component } from 'react';
import './App.css';

import { Routes, Route, Link, useParams } from 'react-router-dom'; // Import Link component

import MyRoutes from './components/MyRoutes';

import NewDropDown from './components/NewDropDown';

import { arabicGenresNameFirst } from './data/arabicGenresNameFirst';

import Layout from './components/Layout';
import MappedPosterWithPages from './components/MappedPosterWithPages';
// import NavBar from './navBar';
export const genres = {
  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
  documentary: 99,
  drama: 18,
  family: 10751,
  Fantasy: 14,
  history: 36,
  Horror: 27,
  music: 10402,
  mystery: 9648,
  romance: 10749,
  'science Fiction': 878,
  'tv Movie': 10770,
  thriller: 53,
  war: 10752,
  western: 37,
};

function App() {
  return (
    <Layout>
      <MyRoutes />
    </Layout>
    // <div>
    //   <NewDropDown title='Popular Movies' menuItems={arabicGenresNameFirst} />

    //   <MyRoutes />
    // </div>
  );
}

export default App;

// {Object.keys(genres).map((genre, idx) => (
//   <button>{genre}</button>
// ))}
