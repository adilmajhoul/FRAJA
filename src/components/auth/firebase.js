// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

// Your web app's Firebase configuration, replace it with your project keys
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };
