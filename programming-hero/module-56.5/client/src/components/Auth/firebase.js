// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbBn0UTlSwy6hml-pW9qsd08Kxlkegssw",
  authDomain: "module-56-5.firebaseapp.com",
  projectId: "module-56-5",
  storageBucket: "module-56-5.firebasestorage.app",
  messagingSenderId: "900701775168",
  appId: "1:900701775168:web:da18e79cfdaa2e2bf0c6a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;