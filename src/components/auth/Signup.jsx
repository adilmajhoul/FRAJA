import Layout from "./Layout";


import React from "react";
import { useState } from "react";

import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup()
{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) =>
  {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) =>
      {
        console.log(userCredential);
      })
      .catch((error) =>
      {
        console.log(error);
      });
  };


  return (
    <Layout>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">

        <form

          onSubmit={signUp}
        >
          <div className="flex flex-col space-y-2">
            <label >Email address</label>
            <div >
              <input
                type="text"
                // autocomplete="email"
                class="font-semibold mt-1 block w-full rounded-md py-1.5 ring-1 ring-gray-400 "

                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <span> email is : {email}</span>
          </div>


          <div className="flex flex-col space-y-2">
            <label class="">Password</label>
            <div >
              <input
                type="password"
                autocomplete="email"
                class="font-semibold mt-1  block w-full rounded-md py-1.5 ring-1 ring-gray-400 "
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <span> password is : {password}</span>
          </div>


          <div class="my-5">
            <button
              href="#"
              type="submit"
              class="flex w-full justify-center rounded-md bg-gray-950 py-1.5 font-semibold text-white hover:bg-gray-600"
            >
              Sign Up
            </button>
          </div>

        </form>
      </div>

    </Layout>
  );
}

export default Signup;
