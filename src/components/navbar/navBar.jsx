import React, { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';

import { BiSearch } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import { BsCameraReels } from 'react-icons/bs';

// new drop down
import NewDropDown from './NewDropDown';
// ---------------------------------------
import { Route, Link, Routes } from 'react-router-dom';

import { arabicGenresNameFirst } from '../../data/arabicGenresNameFirst';

export default function NavBar({
  currentPage,
  setCurrentPage,
  currentCategory,
  setCurrentCategory,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  // ---------------------------------------------------------------------------------
  // DATA SECTION
  const shows = {
    'popular movies': {
      Action: 28,
      Adventure: 12,
      Animation: 16,
      Comedy: 35,
      Crime: 80,
      Documentary: 99,
      Drama: 18,
      Family: 10751,
      Fantasy: 14,
      History: 36,
      Horror: 27,
      Music: 10402,
      Mystery: 9648,
      Romance: 10749,
      'Science Fiction': 878,
      'TV Movie': 10770,
      Thriller: 53,
      War: 10752,
      Western: 37,
    },
  };

  return (
    <div className='mx-10 h-28 navbar flex flex-row items-center justify-center  bg-[#303030] py-3 '>
      {/* logo */}
      <Link className='' to='/'>
        <div className='mx-5 flex flex-row justify-center text-3xl font-extrabold text-white hover:cursor-pointer '>
          <span className='mr-2'>FRAJA</span>
          <BsCameraReels className='' />
        </div>
      </Link>

      <button className='ml-5 border-b-4 border-red-400 py-1 text-[#aaa] hover:text-[#303030] hover:text-gray-200'>
        Trending
      </button>

      <button className='ml-5 border-b-4 border-red-400 py-1 text-[#aaa] hover:text-[#303030] hover:text-gray-200'>
        Now Playing
      </button>

      <button className='ml-5 border-b-4 border-red-400 py-1 text-[#aaa] hover:text-[#303030] hover:text-gray-200'>
        Upcoming
      </button>

      {/* drop down buttons */}

      <NewDropDown
        title='Top Movies'
        showType='movie'
        menuItems={arabicGenresNameFirst}
      />
      <NewDropDown
        title='Top Tv Shows'
        showType='tv'
        menuItems={arabicGenresNameFirst}
      />

      <NewDropDown title='Dropdown 2' />

      <div className='mx-2 my-1 flex w-1/4 flex-row items-center justify-between '>
        {/* social media links */}
        <div className=' flex flex-row items-center text-[#aaa]'>
          <Link to='/login'>
            <button className='mx-1 flex justify-between rounded-full border-2 border-red-600 px-2 py-1 text-white ring-gray-300 focus:ring-1'>
              دخول / تسجيل
              <BiUser className='ml-2 h-6 w-6 rounded-full bg-red-600 text-[#303030]' />
            </button>
          </Link>
          <BiSearch className=' mx-1 h-8 w-8 rounded rounded-full bg-gray-600 p-1 text-gray-300 hover:cursor-pointer hover:text-[#303030] hover:text-gray-200 ' />
        </div>

        <div className='0 flex flex-row  text-[#aaa]'>
          <FaFacebookF className='mx-1 h-7 w-7 rounded rounded-full p-1 hover:cursor-pointer hover:bg-[#aaa] hover:text-[#303030] ' />
          <RiTwitterXFill className='mx-1 h-7 w-7 rounded rounded-full p-1 hover:cursor-pointer hover:bg-[#aaa] hover:text-[#303030] ' />
          <FaInstagram className='mx-1 h-7 w-7 rounded rounded-full p-1 hover:cursor-pointer hover:bg-[#aaa] hover:text-[#303030] ' />
        </div>
      </div>
    </div>
  );
}
