// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL8Lekw3b8Egxq73ljYHkIgwHTcs2TTzg",
  authDomain: "milestone-09-d423a.firebaseapp.com",
  projectId: "milestone-09-d423a",
  storageBucket: "milestone-09-d423a.firebasestorage.app",
  messagingSenderId: "352629633496",
  appId: "1:352629633496:web:862e6062938ccdea9b82ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
