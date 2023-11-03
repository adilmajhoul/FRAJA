import React from 'react';

export default function ProfilePrototype() {
  return (
    <div>
      <div className='mx-10 rounded-md border border-gray-600 bg-gray-800 text-white'>
        <div>
          <img
            className='h-52 w-full object-cover'
            src='https://www.wallpaperup.com/uploads/wallpapers/2016/11/22/1051612/7347241fa5b8d0ef87baabadc497d5a8.jpg'
            alt='background-img'
          />
        </div>

        <div className='flex h-36 flex-row items-center'>
          <div className='p-7'>
            <img
              className='h-24 w-24 rounded-md object-cover'
              src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80'
              alt=''
            />
          </div>

          <div className='flex flex-col space-y-3'>
            <div>
              <span className='md:(text-xl text-gray-300) font-semibold'>
                SnowBell
              </span>
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
              <span>
                <b className='text-base'>8</b> Followers
              </span>
              <span>
                <b className='text-base'>9</b> Following
              </span>
              <span>
                <b className='text-base'>0</b> Points
              </span>
            </div>
          </div>

          <div className='ml-80 md:ml-96 space-x-3 text-base'>
            <button className='rounded bg-gray-400 px-2 py-1 hover:bg-gray-500 text-white'>
              + Follow
            </button>
            <button className='rounded bg-blue-600 px-2 py-1 hover:bg-blue-700 text-white'>
              + Add friend
            </button>
            <button className='rounded border border-gray-400 px-2 py-1 hover:bg-gray-500 text-white'>
              + Message
            </button>
          </div>
        </div>

        <div className='flex h-12 items-center justify-center space-x-3 rounded-b-md border-t border-gray-600 text-gray-400'>
          <button className='hover:text-blue-600'>Activity</button>
          <button className='hover:text-blue-600'>Friends</button>
          <button className='hover:text-blue-600'>Photo</button>
          <button className='hover:text-blue-600'>Groups</button>
          <button className='hover:text-blue-600'>Profile</button>
          <button className='hover:text-blue-600'>Forum</button>
          <button className='hover:text-blue-600'>Points</button>
          <button className='hover:text-blue-600'>Achievements</button>
          <button className='hover:text-blue-600'>Ranks</button>
        </div>
      </div>
    </div>
  );
}
