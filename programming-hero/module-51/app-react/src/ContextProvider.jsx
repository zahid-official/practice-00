import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

// create context API
export const AuthContext = createContext(null);

//component
const ContextProvider = ({ children }) => {
  //state for users
  const [user, setUser] = useState(null);

  //observer of users from firebase
  useEffect(() => {
    const observer = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        console.log("Users Data Available");
        setUser(userData);
      } else {
        console.log("Users Data Not Available");
        setUser(null);
      }
    });

    return () => {
      observer();
    };
  }, [user]);

  // create user from firebase
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout user
  const logoutUser = () => {
    return signOut(auth)
  };

  //value of Context API
  const obj = {
    user,
    createUser,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.object,
};

export default ContextProvider;
