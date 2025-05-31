/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import AuthContext from "./context";
import { auth } from "./Firebase";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthProvider = ({ children }) => {
  // state for user
  const [user, setUser] = useState(null);
  // state for loading
  const [loading, setLoading] = useState(true);
  //state for forget password
  const [forget, setForget] = useState(null);

  // register
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut
  const logOut = ()=>{
    setLoading(true);
    return signOut(auth);
  }

   // google
   const google = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  // update Profile
  const profile = (updatedData)=>{
    return updateProfile(auth.currentUser, updatedData);
  }

  //send reset email
  const resetEmail = (email)=>{
    return sendPasswordResetEmail(auth, email);
  }

  //observer
  useEffect(() => {
    const observer = onAuthStateChanged(auth, (userData) => {
      setUser(userData);
      setLoading(false);
    });

    return () => {
      observer();
    };
  }, []);

  // Context Value
  const contextValue = {
    user,
    loading,
    setUser,
    login,
    register,
    google,
    logOut, 
    profile,
    forget,
    setForget,
    resetEmail,
  };


  return (
    <div>
      <AuthContext.Provider value={contextValue}>
        {children}

        <ToastContainer
          position="top-center"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
