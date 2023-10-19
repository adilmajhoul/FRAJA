// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: 'AIzaSyB2TQvb___jul8MeZp7vdUfIZDCHgmE9Lo',
  authDomain: 'adiltest-b3180.firebaseapp.com',
  projectId: 'adiltest-b3180',
  storageBucket: 'adiltest-b3180.appspot.com',
  messagingSenderId: '876072698478',
  appId: '1:876072698478:web:9c4a4c90ef69c7c74edc7f',
  measurementId: 'G-GVKZR4GW9W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
