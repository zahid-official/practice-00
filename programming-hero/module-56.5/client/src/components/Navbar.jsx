import { useContext } from "react";
import logo from "/assets/01.logo.png";
import { Link, NavLink } from "react-router-dom";
import ContexAPI from "./Auth/ContexAPI";
import { toast } from "react-toastify";

const Navbar = () => {
  // useContext
  const { user, logout } = useContext(ContexAPI);

  // handleLogout
  const handleLogout = () => {
    logout()
    .then(()=>{
      toast.success("Sign Out Successfully");
    })
    .catch(error => console.log(error.message))
  }

  const links = (
    <>
      <li className="text-lg font-semibold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="text-lg font-semibold">
        <NavLink to={"/addCoffee"}>Add Coffee</NavLink>
      </li>
      <li className="text-lg font-semibold">
        <NavLink to={"/user"}>User</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar justify-around py-6 bg-[url(/assets/02.bg.jpg)] bg-center text-white">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu bg-[#7e644a] menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"}>
            <div
              className={
                "flex flex-1 gap-1.5 items-center sm:justify-start justify-center"
              }
            >
              <img src={logo} alt="logo" className="h-20" />
              <h1 className="md:text-5xl sm:block hidden text-4xl font-semibold rancho text-white">
                Espresso Emporium
              </h1>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>

        <div className="space-x-3 text-right">
          {user?.email && <span>Hi, {user?.displayName}</span>}

          {user?.email ? (
            <button onClick={handleLogout} className="btn rounded rancho text-xl bg-[#c99d62] border-none hover:text-white hover:bg-transparent hover:outline hover:outline-1 hover:outline-white transition sm:px-8 px-6 duration-500">
              Sign Out
            </button>
          ) : (
            <Link to={"/login"}>
              <p className="lg:px-[125px]"></p>
              <button className="btn rounded rancho text-xl bg-[#c99d62] border-none hover:text-white hover:bg-transparent hover:outline hover:outline-1 hover:outline-white transition sm:px-8 px-6 duration-500">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
