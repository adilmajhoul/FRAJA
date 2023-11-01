import React from 'react';
import { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

import { signup } from '../../services/personalApi/auth/signup';
import { getFormData } from '../../utils/getFormData';
import axios from 'axios';

function Signup() {
  const [userId, setUserId] = useState('');
  const [isAccountCreated, setIsAccountCreated] = useState(undefined);

  const [serverError, setServerErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = getFormData(e);
      const res = await signup(formData);

      if (res._id) {
        console.log('Signup successful:', res);
        setIsAccountCreated(true);
      } else {
        console.log(res.data);
        setIsAccountCreated(false);

        setServerErro(res.data);
      }
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  };

  return (
    <div className='min-h-screen flex items-center'>
      <img
        className='opacity-50 h-screen object-cover w-1/2'
        src='https://picjumbo.com/wp-content/uploads/young-woman-watching-tv-and-eating-popcorn-at-night-free-photo.jpg'
        alt=''
      />

      <div className='relative w-1/2'>
        <div class="opacity-25  flex items-center justify-center bg-[url('https://bit.ly/login-doodle-patterns')] bg-center bg-no-repeat bg-cover h-screen "></div>
        <form
          className='flex flex-col bg-opacity-40 absolute inset-0 top-28 shadow-2xl border-4 border-[#aaa]  h-min m-10 rounded-xl p-10 bg-[#303030] text-gray-400'
          onSubmit={handleSubmit}
        >
          {isAccountCreated == true && (
            <div className='mb-4 py-2 flex justify-center rounded-md bg-green-700 text-white font-bold text-lg'>
              Account Created Successfully
              <Link
                className='ml-2 text-black font-extrabold text-xl'
                to='/login'
              >
                Login Here
              </Link>
            </div>
          )}

          {isAccountCreated == false && (
            <div className='mb-4 py-2 flex justify-center rounded-md bg-red-800 text-white font-bold text-lg'>
              {serverError}
            </div>
          )}
          <label className='text-xl font-bold text-[#aaa]'>Name</label>
          <input
            className='mb-4 focus:outline-none px-2 py-1 rounded-md focus:ring-2 focus:ring-red-600'
            type='text'
            name='name'
            placeholder='name'
          />

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
            Create Account
          </button>

          <Link to='/login'>
            <span className='text-white'>
              You Already have Have Account ?
              <span className='p-1 rounded-md cursor-pointer font-semibold text-lg ml-4 text-red-600  active:bg-red-600 active:text-white'>
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
