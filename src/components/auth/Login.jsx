import { Link } from 'react-router-dom';

import React from 'react';
import { useState } from 'react';

import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='h-screen flex items-center'>
      <img
        className='opacity-50 h-screen object-cover w-1/2'
        src='https://www.replacementremotes.com/blog/wp-content/uploads/2017/12/person-watches-TV-at-night-in-his-bed.jpg'
        alt=''
      />

      <div className='relative w-1/2'>
        <div class="opacity-25  flex items-center justify-center bg-[url('https://bit.ly/login-doodle-patterns')] bg-center bg-no-repeat bg-cover h-screen ">
          {/* <div class='opacity-80 h-1/2 w-1/2 bg-red-700'>hello</div> */}
        </div>
        <form
          className='flex flex-col  bg-opacity-40 absolute inset-0 top-28 shadow-2xl border-4 border-[#aaa]  h-min m-10 rounded-xl p-10 bg-[#303030] text-gray-400'
          onSubmit={login}
        >
          <label className='text-xl font-bold text-[#aaa]'>Email address</label>
          <input
            className='mb-4 focus:outline-none px-2 py-1 rounded-md focus:ring-2 focus:ring-red-600'
            type='email'
            name='email'
            placeholder='Email'
          />

          <label className='text-xl font-bold text-[#aaa]'>Password</label>
          <input
            className='mb-5 focus:outline-none px-2 py-1 rounded-md focus:ring-2 focus:ring-red-600'
            type='password'
            name='password'
            placeholder='Password'
          />

          <button
            type='submit'
            className='mb-4 flex w-full justify-center rounded-md bg-red-600 py-1.5 font-semibold text-white active:border-4 active:bg-transparent active:border-red-600 text-xl'
          >
            <Link to='/home'>Log In </Link>
          </button>
          <Link to='/signup'>
            <span className='text-white'>
              You Don't Have An Account ?
              <span className='p-1 rounded-md cursor-pointer font-semibold text-lg ml-4 text-red-600  active:bg-red-600 active:text-white'>
                Create One Here
              </span>
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}
