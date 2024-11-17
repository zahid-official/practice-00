import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";

// create context API
export const AuthContext = createContext(null);

//component
const ContextProvider = ({ children }) => {

  //state for users
  const [user, setUser] = useState(null);
  //state for loading
  const [loading, setLoading] = useState(true);

  //observer of users from firebase
  useEffect(() => {
    const observer = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        console.log("Users Data Available");
        setUser(userData);
        setLoading(false);
      } 
      else {
        console.log("Users Data Not Available");
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      observer();
    };
  }, [user]);

  // Register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth)
  };

  // Login by Social
  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  
  const socialMedia = (provider)=>{
    return signInWithPopup(auth, provider);
  }


  //value of Context API
  const obj = {
    user,
    loading,
    createUser,
    loginUser,
    logoutUser,
    socialMedia,
    googleProvider,
    twitterProvider,
    facebookProvider,
  };

  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.object,
};

export default ContextProvider;
