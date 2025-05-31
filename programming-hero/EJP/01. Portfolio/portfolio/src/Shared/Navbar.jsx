import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = (
    <>
      <li className="text-xl font-semibold title-font">
        <Link to={"banner"} spy={true} smooth={true} duration={500}>
          Home
        </Link>
      </li>

      <li className="text-xl font-semibold title-font">
        <Link
          to={"about"}
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
        >
          About
        </Link>
      </li>

      <li className="text-xl font-semibold title-font">
        <Link to={"skills"} spy={true} smooth={true} offset={0} duration={500}>
          Skills
        </Link>
      </li>

      <li className="text-xl font-semibold title-font">
        <Link
          to={"projects"}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Projects
        </Link>
      </li>

      <li className="text-xl font-semibold title-font">
        <Link to={"contact"} spy={true} smooth={true} offset={-170} duration={500}>
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar container mx-auto py-7 px-6">
        <div className="navbar-start">
          <Link
            to={"banner"}
            spy={true}
            smooth={true}
            duration={500}
            className="sm:text-[50px] text-4xl relative font-semibold title-font cursor-pointer"
          >
            Zahid
            <span className="absolute sm:-top-7 -top-5 sm:right-7 right-5 inline-block text-red-500">
              .
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal border bg-[#ffffffa8] rounded-badge px-6">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"contact"}
            spy={true}
            smooth={true}
            offset={-170}
            duration={500}
          >
            <button className="btn group  hover:bg-black hover:text-white transition-all duration-300 bg-[#ffffffa8] rounded-full px-8 h-14 text-xl font-medium title-font sm:flex hidden items-center">
              Contact
              <span className="-ml-1 mt-1 -rotate-45 group-hover:rotate-0 duration-200">
                <IoMdArrowRoundForward />
              </span>
            </button>
          </Link>

          {/* dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
              className="z-20 right-2 py-4 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-40 p-2 shadow gap-2"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
