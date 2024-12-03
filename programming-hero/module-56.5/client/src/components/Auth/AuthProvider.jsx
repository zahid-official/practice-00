/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import ContexAPI from "./ContexAPI";
import auth from "./firebase";
import { useState } from "react";


const AuthProvider = ({children}) => {

    //state for users
    const [user, setUser] = useState([]);

    // register
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    

    const contextValue = {
        user,
        setUser,
        register,
        login,
    }
    return (
        <div>
            <ContexAPI.Provider value={contextValue}>
                {children}
            </ContexAPI.Provider>
        </div>
    );
};

export default AuthProvider;