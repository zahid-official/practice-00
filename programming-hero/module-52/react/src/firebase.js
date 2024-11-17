// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6ZYTReFWTxynj6k6gFFoxvjP6nd6_VKY",
  authDomain: "module-52-68e6f.firebaseapp.com",
  projectId: "module-52-68e6f",
  storageBucket: "module-52-68e6f.firebasestorage.app",
  messagingSenderId: "260493293191",
  appId: "1:260493293191:web:55f5bcd3a9db8973b32a22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
