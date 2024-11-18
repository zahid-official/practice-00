import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    //use location
    const loaction = useLocation();

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>;
    }
   
    if(user){
        return children;
    }
    
    
    return <Navigate state={loaction.pathname} to={'/auth/login'}></Navigate>
};

export default PrivetRoute;