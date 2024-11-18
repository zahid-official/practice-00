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
  // loading state
  const [loading, setLoading] = useState(true);

  //register account
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(authentication, email, password);
  };

  //login account
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(authentication, email, password);
  };

  // signOut
  const logOut = ()=>{
    setLoading(true);
    return signOut(authentication);
  }


  //observer
  useEffect(() => {
    const observer = onAuthStateChanged(authentication, (userData) => {
      setUser(userData);
      setLoading(false);
    });
    
    return ()=>{
        observer();
    }
  }, []);

  const information = {
    user,
    loading,
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
