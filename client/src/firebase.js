// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "mern-blog-c186a.firebaseapp.com",
  projectId: "mern-blog-c186a",
  storageBucket: "mern-blog-c186a.appspot.com",
  messagingSenderId: "711379302023",
  appId: "1:711379302023:web:4ea4db194a65032b82aa22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);