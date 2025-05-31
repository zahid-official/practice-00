import { IoMdArrowRoundForward } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";
import img from "/assets/photo.jpeg";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="text-center">
      {/* img */}
      <div className="flex justify-center">
        <img
          src={img}
          className="sm:h-40 h-36 rounded-full border border-gray-100"
          alt=""
        />
      </div>

      {/* text */}
      <div>
        <p className="text-2xl mt-4 sm:mb-6 mb-3">Hi! I’m Zahidul Islam</p>
        <h2 className="sm:text-7xl text-4xl">
          Frontend web developer <br className="lg:block hidden" /> based in
          Dhaka.
        </h2>
        <p className="mt-4">
          I’m a Frontend Web Developer based in Dhaka, passionate about creating
          stunning, responsive websites. <br className="lg:block hidden" />{" "}
          Focusing on clean code and modern design, I turn digital ideas into
          seamless experiences.
        </p>
      </div>

      {/* button */}
      <div className="flex flex-wrap justify-center gap-4 sm:mt-10 mt-5">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-170}
          duration={500}
        >
          <button className="btn hover:bg-gray-300 hover:text-black rounded-full sm:px-8 sm:h-14 bg-black text-white text-xl font-medium title-font flex items-center">
            Contact me
            <span className=" mt-1">
              <IoMdArrowRoundForward />
            </span>
          </button>
        </Link>

        <NavLink
          to="https://docs.google.com/document/d/1qQZ0tdlJQ5_lOP4ZDZFxVdzNxYq_G8tHbi67-Fvse-g/edit?usp=sharing"
          className="btn hover:bg-black hover:text-white rounded-full sm:px-8 sm:h-14 bg-transparent text-xl font-medium title-font flex items-center"
        >
          My Resume
          <span className="mt-1">
            <FaDownload size={18} />
          </span>
        </NavLink>
      </div>

      {/* social */}
      <div className="text-2xl flex flex-col justify-center items-center fixed bottom-16 right-3 gap-4">
        <NavLink to="https://www.linkedin.com/in/zahid8/">
          <FaLinkedinIn></FaLinkedinIn>
        </NavLink>

        <NavLink to="https://github.com/zahid-official">
          <FaGithub></FaGithub>
        </NavLink>

        <NavLink to="https://www.facebook.com/zahid.official8">
          <FaFacebookF></FaFacebookF>
        </NavLink>

        <div className="w-[1px] h-16 bg-black"></div>
        <p className="inline-block text-black font-bold text-lg vertical-text">
          Connect on
        </p>
      </div>
    </div>
  );
};

export default Banner;
