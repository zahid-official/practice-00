import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import { authentication } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Provider = ({ children }) => {
  // state
  const [user, setUser] = useState([]);

  //register account
  const register = (email, password) => {
    return createUserWithEmailAndPassword(authentication, email, password);
  };

  //login account
  const login = (email, password) => {
    return signInWithEmailAndPassword(authentication, email, password);
  };

  // signOut
  const logOut = ()=>{
    return signOut(authentication);
  }


  //observer
  useEffect(() => {
    const observer = onAuthStateChanged(authentication, (userData) => {
      setUser(userData);
    });
    
    return ()=>{
        observer();
    }
  }, []);

  const information = {
    user,
    setUser,
    register,
    login,
    logOut,
  };
  return (
    <div>
      <AuthContext.Provider value={information}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export default Provider;
