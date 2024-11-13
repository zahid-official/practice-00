// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkGYN3ogLrRBkXiTcT-Yg_M36uirMuq_k",
  authDomain: "module-50-7d7df.firebaseapp.com",
  projectId: "module-50-7d7df",
  storageBucket: "module-50-7d7df.firebasestorage.app",
  messagingSenderId: "66205104674",
  appId: "1:66205104674:web:a103593612d9124ad6287b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;