import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar container mx-auto py-6">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost sm:text-4xl text-3xl">Firebase</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="text-base font-semibold"><NavLink to='/'>LogIn</NavLink></li>
            <li className="text-base font-semibold"><NavLink to='/register'>Register</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
