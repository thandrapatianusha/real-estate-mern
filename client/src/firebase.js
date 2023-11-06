// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-420c6.firebaseapp.com",
  projectId: "mern-estate-420c6",
  storageBucket: "mern-estate-420c6.appspot.com",
  messagingSenderId: "212854620425",
  appId: "1:212854620425:web:3fcb423b5db392912593d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);