import React, { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';

import { BiUser } from 'react-icons/bi';
import { BsCameraReels } from 'react-icons/bs';

import NewDropDown from './NewDropDown';
import { Link } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';

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

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div>
      <div className='flex h-28 navbar  flex-row items-center justify-between  bg-[#303030] py-3 '>
        {/* logo */}
        <Link className='' to='/'>
          <div className='mx-5 flex flex-row justify-center text-3xl font-extrabold text-white hover:cursor-pointer '>
            <span className='mr-2'>FRAJA</span>
            <BsCameraReels className='' />
          </div>
        </Link>

        <div className='hidden md:flex font-semibold'>
          <button className='ml-5 border-b-4 border-red-400 py-1 text-[#aaa] hover:text-[#303030] hover:text-gray-200'>
            Trending
          </button>
          <button className='ml-5 border-b-4 border-red-400 py-1 text-[#aaa] hover:text-[#303030] hover:text-gray-200'>
            Now Playing
          </button>
          <button className='ml-5 border-b-4 border-red-400 py-1 text-[#aaa] hover:text-[#303030] hover:text-gray-200'>
            Upcoming
          </button>
        </div>

        {/* drop down buttons */}

        <div className='hidden lg:flex'>
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
        </div>

        <div className='hidden md:flex mx-2 my-1 flex-row items-center  '>
          {/* social media links */}
          <div className=' flex flex-row items-center text-[#aaa]'>
            <button className='text-lg font-semibold hover:bg-red-600 hover:text-[#303030] mx-1 flex justify-between rounded-full border-2 border-red-600 px-2 py-1 text-white ring-gray-300 focus:ring-1'>
              <Link to='/login'>Login</Link>
              <BiUser className='ml-2 h-6 w-6 rounded-full bg-red-600 text-[#303030]' />
            </button>
          </div>

          <div className='0 flex flex-row  text-[#aaa]'>
            <FaFacebookF className='mx-1 h-7 w-7 rounded rounded-full p-1 hover:cursor-pointer hover:bg-[#aaa] hover:text-[#303030] ' />
            <RiTwitterXFill className='mx-1 h-7 w-7 rounded rounded-full p-1 hover:cursor-pointer hover:bg-[#aaa] hover:text-[#303030] ' />
            <FaInstagram className='mx-1 h-7 w-7 rounded rounded-full p-1 hover:cursor-pointer hover:bg-[#aaa] hover:text-[#303030] ' />
          </div>
        </div>

        {/* small screens responsive stuff */}

        <div className='xl:hidden  mx-4 text-white text-5xl'>
          <div onClick={() => setIsBurgerOpen(prev => !prev)}>
            <AiOutlineMenu className='hover:bg-gray-500 cursor-pointer rounded rounded-md p-1' />
          </div>
        </div>
      </div>

      {/* <Link className='xl:hidden' to='/'>
        <div className='mx-5 flex flex-row justify-center text-3xl font-extrabold text-white hover:cursor-pointer '>
          <span className='mr-2'>FRAJA</span>
          <BsCameraReels className='' />
        </div>
      </Link> */}

      {isBurgerOpen && (
        <div className='flex flex-col font-semibold'>
          <button className='ml-5 border-b-4 border-red-400 py-1 text-[#aaa] hover:text-[#303030] hover:text-gray-200'>
            Trending
          </button>
          <button className='ml-5 border-b-4 border-red-400 py-1 text-[#aaa] hover:text-[#303030] hover:text-gray-200'>
            Now Playing
          </button>
          <button className='ml-5 border-b-4 border-red-400 py-1 text-[#aaa] hover:text-[#303030] hover:text-gray-200'>
            Upcoming
          </button>
        </div>
      )}
    </div>
  );
}
