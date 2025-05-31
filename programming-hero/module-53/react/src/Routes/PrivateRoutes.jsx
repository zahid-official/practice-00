/* eslint-disable react/prop-types */
import { useContext } from "react";
import AuthContext from "../Components/Auth/context";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    // useContext
    const {user, loading} = useContext(AuthContext);
    
    //useLocation
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center py-8"><span className="loading loading-ring loading-lg"></span></div>
    }

    if(user && user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutes;