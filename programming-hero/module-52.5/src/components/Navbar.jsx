import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  //handleSignOut
  const handleSignOut = () => {
    logOut()
      .then(() => console.log("Sign Out Successfull"))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="grid grid-cols-3 py-5">
      <div className="flex items-center gap-3">
        
        <p>{user && user?.email}</p>
      </div>

      <div className="nav flex items-center justify-center space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="login flex gap-3 justify-end items-center">
        <div className=" ">
          {user && user?.photoURL ? <img className="h-10 rounded-full" src={user.photoURL}></img> : <FaUserCircle size={42} />}
        </div>
        
          {user?<button onClick={handleSignOut} className="btn btn-neutral rounded-none px-10"> Sign Out </button> : <Link to="/auth/login"><button className="btn btn-neutral rounded-none px-10">Login</button></Link>}
      </div>
    </div>
  );
};

export default Navbar;
