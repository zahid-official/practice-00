/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ContexAPI from "./ContexAPI";
import auth from "./firebase";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  //state for users
  const [user, setUser] = useState(null);
  // state for loading
  const [loading, setLoading] = useState(true);

  // register
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const profile = (profileData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profileData);
  }

  //login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  }

  // forget password
  const resetPassword = (email)=>{
    return sendPasswordResetEmail(auth, email);
  }

  

  // observer
  useEffect(()=>{
    const observer = onAuthStateChanged(auth, (userData) => {
      setUser(userData);
      setLoading(false);
    })

    return () => {
      observer();
    }
  }, [])







  console.log(user);

  const contextValue = {
    user,
    setUser,
    register,
    login,
    logout,
    profile,
    loading,
    resetPassword,
  };
  return (
    <div>
      <ContexAPI.Provider value={contextValue}>
        {children}
        
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ContexAPI.Provider>
    </div>
  );
};

export default AuthProvider;
