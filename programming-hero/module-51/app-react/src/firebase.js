// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApOvOXuAxFzA6z-cWhrYH14k2MGzA_3Ow",
  authDomain: "module-51-63d28.firebaseapp.com",
  projectId: "module-51-63d28",
  storageBucket: "module-51-63d28.firebasestorage.app",
  messagingSenderId: "1056795916278",
  appId: "1:1056795916278:web:10e4344397d72b8bd1f9d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
