import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ContextProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logoutUser()
      .then(() => console.log("LogOut Successful"))
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <nav className="navbar container mx-auto py-6">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="text-base font-semibold">
                <NavLink to="/">LogIn</NavLink>
              </li>
              <li className="text-base font-semibold">
                <NavLink to="/register">Register</NavLink>
              </li>
              <li className="text-base font-semibold">
                <NavLink to="/order">Order</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost sm:text-4xl text-3xl font-bold">
            Firebase
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-base font-semibold">
              <NavLink to="/">LogIn</NavLink>
            </li>
            <li className="text-base font-semibold">
              <NavLink to="/register">Register</NavLink>
            </li>
            {user && (
              <>
                <li className="text-base font-semibold">
                  <NavLink to="/order">Order</NavLink>
                </li>
                <li className="text-base font-semibold">
                  <NavLink to="/profile">Profile</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          
          <p>
            {user ? (
              <>
                <span>{user?.displayName}</span>
                {/*রেজিস্ট্রারে এখানে user?.email দিলে ততক্ষণাত আসে কিন্তু displayName ততক্ষনাত আসে না কেন? রিলোডের পরে কেন আসে*/}

                <button onClick={handleLogOut} className="btn ml-4 btn-primary">
                  Log Out
                </button>
                {/* button এ যদি btn class ব্যবহার করা হয় তাহলে লোড হতে থাকে কেন?
                প্রাইভেট রাউটে তো নেভিগেট সেট করাই আছে, তাহলে লগআউটে লিংক না দিলে 
                লোড হতে থাকে কেন? */}
              </>
            ) : (
              <>
                <button className="btn ml-4 btn-primary">
                  <Link to="/">LogIn</Link>
                </button>
              </>
            )}
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
