import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { login } from '../../services/personalApi/auth/login';
import { getFormData } from '../../utils/getFormData';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [isAccountCreated, setIsAccountCreated] = useState(undefined);

  const [serverMessage, setServerMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = getFormData(e);
      const res = await login(formData);

      if (res._id) {
        console.log('login successful:', res);
        setIsAccountCreated(true);

        // set jwt token in local storage
        localStorage.setItem('frajaToken', res.token);
      } else {
        console.log(res.data);
        setIsAccountCreated(false);

        setServerMessage(res.data);
      }
    } catch (error) {
      console.error('login failed:', error.message);
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
        <div className="opacity-25  flex items-center justify-center bg-[url('https://bit.ly/login-doodle-patterns')] bg-center bg-no-repeat bg-cover h-screen "></div>
        <form
          className='flex flex-col bg-opacity-40 absolute inset-0 top-28 shadow-2xl border-4 border-[#aaa]  h-min m-10 rounded-xl p-10 bg-[#303030] text-gray-400'
          onSubmit={handleSubmit}
        >
          {isAccountCreated == true && (
            <div className='mb-4 py-2 flex justify-center rounded-md bg-green-700 text-white font-bold text-lg'>
              {serverMessage || 'Welcome'}
            </div>
          )}

          {isAccountCreated == false && (
            <div className='mb-4 py-2 flex justify-center rounded-md bg-red-800 text-white font-bold text-lg'>
              {serverMessage || 'something happened try again please'}
            </div>
          )}

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
            Login
          </button>

          <span className='text-white'>
            You Don't Have An Account ?
            <span className='p-1 rounded-md cursor-pointer font-semibold text-lg ml-4 text-red-600  active:bg-red-600 active:text-white'>
              <Link to='/signup'> Create One Here</Link>
            </span>
          </span>
        </form>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';

// import { getFormData } from '../../utils/getFormData';
// import { login } from '../../services/personalApi/auth/login';

// export default function Login() {
//   const [userId, setUserId] = useState('');

//   const [serverError, setServerError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = getFormData(e);
//       const res = await login(formData);

//       console.log('formData->', formData);

//       if (res._id) {
//         console.log('login successful:', res);

//         // set jwt token in local storage
//         localStorage.setItem('frajaToken', res.token);
//       } else {
//         console.log('login failed:', res);

//         setServerError(res.data);
//       }
//     } catch (error) {
//       console.error('login failed:', error.message);
//     }
//   };

//   return (
//     <div className='h-screen flex items-center'>
//       <img
//         className='opacity-50 h-screen object-cover w-1/2'
//         src='https://www.replacementremotes.com/blog/wp-content/uploads/2017/12/person-watches-TV-at-night-in-his-bed.jpg'
//         alt=''
//       />

//       <div className='relative w-1/2'>
//         <div class="opacity-25  flex items-center justify-center bg-[url('https://bit.ly/login-doodle-patterns')] bg-center bg-no-repeat bg-cover h-screen ">
//           {/* <div class='opacity-80 h-1/2 w-1/2 bg-red-700'>hello</div> */}
//         </div>
//         <form
//           className='flex flex-col  bg-opacity-40 absolute inset-0 top-28 shadow-2xl border-4 border-[#aaa]  h-min m-10 rounded-xl p-10 bg-[#303030] text-gray-400'
//           onSubmit={handleSubmit}
//         >
//           <label className='text-xl font-bold text-[#aaa]'>Email address</label>
//           <input
//             className='mb-4 focus:outline-none px-2 py-1 rounded-md focus:ring-2 focus:ring-red-600'
//             type='email'
//             name='email'
//             placeholder='Email'
//           />

//           <label className='text-xl font-bold text-[#aaa]'>Password</label>
//           <input
//             className='mb-5 focus:outline-none px-2 py-1 rounded-md focus:ring-2 focus:ring-red-600'
//             type='password'
//             name='password'
//             placeholder='Password'
//           />

//           <button
//             type='submit'
//             className='mb-4 flex w-full justify-center rounded-md bg-red-600 py-1.5 font-semibold text-white active:border-4 active:bg-transparent active:border-red-600 text-xl'
//           >
//             {/* <Link to={isLogged == true && '/profile'}>Log In </Link> */}
//             Log In
//           </button>
//           <Link to='/signup'>
//             <span className='text-white'>
//               You Don't Have An Account ?
//               <span className='p-1 rounded-md cursor-pointer font-semibold text-lg ml-4 text-red-600  active:bg-red-600 active:text-white'>
//                 Create One Here
//               </span>
//             </span>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }
