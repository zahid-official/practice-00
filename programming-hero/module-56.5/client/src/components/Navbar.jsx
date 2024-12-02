import logo from "/assets/01.logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className={`flex items-center justify-between py-6 md:px-20 px-5 bg-[url(/assets/02.bg.jpg)] bg-center`}
    >
      <div className={"flex flex-1 gap-1.5 items-center sm:justify-start justify-center"}>
        <img src={logo} alt="logo" className="h-20" />
        <h1 className="sm:text-5xl sm:block hidden text-4xl font-semibold rancho text-white">
          {" "}
          Espresso Emporium
        </h1>
      </div>

      <div className="space-x-3">
        <Link to={"/login"}>
          <button className="btn rounded rancho text-xl bg-[#c99d62] border-none hover:text-white hover:bg-transparent hover:outline hover:outline-1 hover:outline-white transition px-8 duration-500">
            Login
          </button>
        </Link>

        <Link to={"/login"}>
          <button className="btn rounded rancho text-xl bg-[#c99d62] border-none hover:text-white hover:bg-transparent hover:outline hover:outline-1 hover:outline-white transition px-6 duration-500">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
