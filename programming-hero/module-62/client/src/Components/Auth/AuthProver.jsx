/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import ContextAPI from "./ContextAPI";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AuthProver = ({ children }) => {
  // state for users
  const [users, setUsers] = useState(null);
  // state for loading
  const [loading, setLoading] = useState(true);
 

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

  // logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // profile update
  const profile = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData);
  };

  // google
  const google = (googleProvider)=>{
    return signInWithPopup(auth, googleProvider);
  }

  // observer
  useEffect(() => {
    const observer = onAuthStateChanged(auth, (usersData) => {
      setUsers(usersData);

      // token validate
      const email = usersData?.email
      if(email){
        axios.post('http://localhost:3000/jwt', {email}, {withCredentials: true})
        .then(res => console.log(res.data));
        setLoading(false);
      }
      else{
        axios.get('http://localhost:3000/removeToken', {withCredentials: true})
        .then(res => console.log(res.data));
        setLoading(false);
      }
    });

    return () => {
      observer();
    };
  }, []);

  // context value
  const contextValue = {
    users,
    setUsers,
    register,
    login,
    logout,
    profile,
    google,
    loading,
    setLoading,
  };


  return (
    <div>
      <ContextAPI.Provider value={contextValue}>
        {children}

        <ToastContainer
          position="top-center"
          autoClose={2499}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ContextAPI.Provider>
    </div>
  );
};

export default AuthProver;
