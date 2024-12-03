/* eslint-disable react/prop-types */
import { useContext } from "react";
import ContexAPI from "../components/Auth/ContexAPI";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    //useContext
    const {user, loading} = useContext(ContexAPI);
    // useLocation
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center py-8"><span className="loading loading-ring loading-lg"></span></div>
    }

    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;