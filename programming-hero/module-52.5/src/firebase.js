// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQrti69UE0_lba4G8LJfG6h9DZj2gIxE0",
  authDomain: "module-52-5.firebaseapp.com",
  projectId: "module-52-5",
  storageBucket: "module-52-5.firebasestorage.app",
  messagingSenderId: "789879129956",
  appId: "1:789879129956:web:100f22ce3a7d488bf35c71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);