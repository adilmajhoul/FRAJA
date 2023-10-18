import React from 'react';
import { useState } from 'react';

import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
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
        src='https://picjumbo.com/wp-content/uploads/young-woman-watching-tv-and-eating-popcorn-at-night-free-photo.jpg'
        alt=''
      />

      <div className='relative w-1/2'>
        <div class="opacity-25  flex items-center justify-center bg-[url('https://bit.ly/login-doodle-patterns')] bg-center bg-no-repeat bg-cover h-screen ">
          {/* <div class='opacity-80 h-1/2 w-1/2 bg-red-700'>hello</div> */}
        </div>
        <form
          className='flex flex-col justify-between bg-opacity-40 absolute inset-0 top-28 shadow-2xl border-4 border-[#aaa]  h-96 m-10 rounded-xl p-10 bg-[#303030] text-gray-400'
          onSubmit={signUp}
        >
          <div className='flex flex-col'>
            <label className='text-xl font-bold text-[#aaa]'>
              Email address
            </label>
            <div>
              <input
                type='text'
                // autocomplete="email"
                class='font-semibold mt-1 block w-full rounded-md py-1.5 ring-1 ring-gray-400 '
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className='flex flex-col'>
            <label className='text-xl font-bold text-[#aaa]'>Password</label>
            <div>
              <input
                type='password'
                autocomplete='email'
                class='font-semibold mt-1  block w-full rounded-md py-1.5 ring-1 ring-gray-400 '
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type='submit'
            class='flex w-full justify-center rounded-md bg-red-600 py-1.5 font-semibold text-white hover:border-2 active:bg-transparent hover:border-red-600 text-xl'
          >
            <Link to='/home'>Create Account</Link>
          </button>
          <Link to='/login'>
            <span className='text-white'>
              You Have Account ?
              <span className='cursor-pointer font-semibold text-lg ml-4 text-red-600'>
                Login Here
              </span>
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
