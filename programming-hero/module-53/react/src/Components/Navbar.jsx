import { NavLink, Link } from "react-router-dom";
import logo from "/assets/logo.png";
import { useContext } from "react";
import AuthContext from "./Auth/context";
import { toast } from "react-toastify";

const Navbar = () => {
  // useContext
  const { user, logOut } = useContext(AuthContext);

  // signOut
  const handleSignOut = () => {
    logOut()
      .then(() => toast.success("Sign Out Successful"))
      .catch((error) => toast.error(error.message));
  };

  const links = (
    <>
      <li className="text-lg font-semibold mx-0.5 hover:text-[#0683a2]">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="text-lg font-semibold mx-0.5 hover:text-[#0683a2]">
        <NavLink to={"/learn"}>Learn</NavLink>
      </li>
      <li className="text-lg font-semibold mx-0.5 hover:text-[#0683a2]">
        <NavLink to={"/tutorials"}>Tutorials</NavLink>
      </li>
      <li className="text-lg font-semibold mx-0.5 hover:text-[#0683a2]">
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      {user && (
        <>
          <li className="text-lg font-semibold mx-0.5 hover:text-[#0683a2]">
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar p-0 justify-between bg-base-100">
        <div>
          <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden sm:p-4 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <p>
            <Link to="/" className="flex gap-1 items-center sm:text-4xl text-3xl font-bold">
              <img src={logo} alt="" /> <span className="mt-2">Elex</span>
            </Link>
          </p>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className=" space-x-3">
          {user && user?.email ? (
            <>
              <p className="text-lg font-bold sm:block hidden">
                Hi, {user?.displayName}
              </p>
              <Link to={'/profile'}>
                <img
                  className="h-10 rounded-full"
                  referrerPolicy="no-referrer"
                  src={user?.photoURL || user?.providerData?.photoURL}
                />
              </Link>

              <button
                onClick={handleSignOut}
                className="btn custom-btn text-lg h-12"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link to={"/login"}>
              <button className="btn custom-btn text-lg h-12">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
