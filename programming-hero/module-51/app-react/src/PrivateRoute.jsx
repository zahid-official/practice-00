import { useContext } from "react";
import { AuthContext } from "./ContextProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner text-accent"></span>
    }

    if(user){
        return children;
    }
    
    return (
        <Navigate to='/'></Navigate>
        // navigae ও useNavigate এর মধ্যে পার্থক্য কি?
    )
};

PrivateRoute.propTypes = {
    children: PropTypes.object,
}

export default PrivateRoute;