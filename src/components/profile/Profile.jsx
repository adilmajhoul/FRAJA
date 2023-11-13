import React, { useEffect, useState } from 'react';

import List from './micro components/List';
import * as collection from '../../services/personalApi/collection/collection.js';
import { useAtom } from 'jotai';
import { reRenderCollections } from './profileAtoms';
import { getuser } from '../../services/personalApi/profile/user';

export default function ProfilePrototype() {
  const [isListOpen, setIsListOpen] = useState(true);

  const [renderCollections, setRenderCollections] =
    useAtom(reRenderCollections);

  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [userObject, setUserObject] = useState({});

  // TODO: should i store user id in local storage ?

  const [collections, setCollections] = useState([]);

  const fetchCollections = async () => {
    const coll = await collection.getUserCollections();

    setCollections(coll);
  };

  const fetchtUser = async () => {
    const user = await getuser(userId);

    console.log('user -->', user);

    setUserObject(user);
  };
  useEffect(() => {
    fetchCollections();
  }, [renderCollections]);

  useEffect(() => {
    fetchtUser();
  }, []);
  return (
    <div>
      <div className='mx-10 rounded-md border border-gray-600 bg-[#393939] text-white'>
        <img
          className='h-52 w-full object-cover'
          src='https://www.wallpaperup.com/uploads/wallpapers/2016/11/22/1051612/7347241fa5b8d0ef87baabadc497d5a8.jpg'
          alt='background-img'
        />

        <div className='mx-10 flex h-36 flex-row items-center justify-between'>
          {/* -------------------------------- */}
          <div className='flex'>
            <img
              className='mx-4 h-24 w-24 rounded-md object-cover'
              src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80'
              alt=''
            />

            <div className='flex flex-col space-y-3'>
              <div>
                <span className='text-xl font-semibold'>{userObject.name}</span>
                <span className='ml-1 rounded border px-2 py-1 text-xs text-gray-400'>
                  Superstar Helper
                </span>
              </div>

              <div className='space-x-1 text-xs text-gray-300'>
                <span>@josephphillips</span>
                <span>•</span>
                <span>Joined : December 25, 2020</span>
              </div>

              <div className='space-x-2 text-sm text-gray-300'>
                <b className='text-base'>8</b> Followers
                <b className='text-base'>9</b> Following
                <b className='text-base'>0</b> Points
              </div>
            </div>
          </div>

          {/* -------------------------------- */}
          <div className='text-white ml-80 md:ml-96 space-x-3 text-base font-semibold'>
            <button className='border-4 border-gray-500 rounded-md active:border-4 active:bg-transparent active:border-gray-500 bg-gray-500 px-2 py-1 hover:bg-gray-500 '>
              + Follow
            </button>
            <button className='border-4 border-red-600 rounded-md active:border-4 active:bg-transparent active:border-red-600 bg-red-600 px-2 py-1  '>
              + Add friend
            </button>
            <button className='rounded-md border-4 border-gray-500 px-2 py-1 active:bg-gray-500 '>
              + Message
            </button>
          </div>
        </div>

        <div className=' flex font-semibold h-12 items-center justify-center rounded-b-md border-t border-gray-600 text-[#aaa] text-lg '>
          <button
            onClick={() => setIsListOpen((prev) => !prev)}
            className={`mx-5 hover:text-red-600 hover:border-b-4 hover:border-red-600 ${
              isListOpen ? 'border-b-4 border-red-600' : ''
            }`}
          >
            Lists
          </button>

          <button className='mx-5 hover:text-red-600 hover:border-b-4 hover:border-red-600'>
            Collections
          </button>

          <button className='mx-5 hover:text-red-600 hover:border-b-4 hover:border-red-600'>
            Friends
          </button>

          <button className='mx-5 hover:text-red-600 hover:border-b-4 hover:border-red-600'>
            Comments
          </button>

          <button className='mx-5 hover:text-red-600 hover:border-b-4 hover:border-red-600 '>
            History
          </button>
        </div>
      </div>

      {/* ----------------------- */}

      {isListOpen && (
        <div
          id='container'
          className='mt-5 py-4 mx-10 flex flex-col  rounded-md border border-gray-600 text-white'
        >
          {collections.map((collection, key) => (
            <List
              key={key}
              title={collection.name}
              shows={collection.shows.map((show) => show)}
            />
          ))}
          {/* -------------------------- */}
        </div>
      )}
    </div>
  );
}
