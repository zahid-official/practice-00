import { Link, useLocation } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      {/* top */}
      {location.pathname === "/" && (
        <div className="pb-8 flex justify-around container mx-auto">
          <div>
            <h4 className="uppercase sm:text-base text-sm text-[#606060]">
              <span className="h-3 w-3 mr-1.5 ml-2.5 bg-black inline-block rounded-full"></span>
              Let’s Talk
            </h4>

            <h3 className="sm:text-7xl inline-block text-4xl highlight-font mt-1.5 font-bold uppercase">
              <span className="custom-text">About your</span> Next project
              <span className="custom-text">.</span>
            </h3>
          </div>
          <button className="uppercase inline-block mt-12 btn bg-transparent rounded-none px-8 border-black">
            Get in Touch
          </button>
        </div>
      )}

      <div className="text-white highlight-font flex sm:flex-row flex-col">
        {/* left */}
        <div className="bg-[#151921] py-28 px-6 flex-1">
          <div className="max-w-sm mx-auto">
            {/* logo */}
            <div className="navbar-start">
              <Link
                to={"/"}
                className="sm:text-[50px] text-4xl relative font-semibold title-font"
              >
                Zahid
                <span className="absolute sm:-top-4 -top-[17px] sm:right-7 right-5 inline-block text-red-500">
                  .
                </span>
              </Link>
            </div>

            {/* contact */}
            <div className="mt-6 space-y-2.5">
              <p className="flex items-center gap-1.5 text-lg">
                <IoIosMail size={25} /> zahid.official8@gmail.com
              </p>
              <p className="flex items-center gap-1.5 ">
                <FaPhoneAlt size={19} /> +88 01869618216
              </p>
              <p className="flex items-center gap-1.5 ">
                <FaLocationDot size={19} /> Dhaka, Bangladesh
              </p>
            </div>

            {/* social media */}
            <div>
              <p className="uppercase mt-14">
                <span className="inline-block px-1 py-0.5 bg-[#21252c] font-semibold">
                  Connect
                </span>{" "}
                on
              </p>

              <div className="space-x-3 mt-4">
                <Link
                  to={"https://www.facebook.com/zahid.official8"}
                  target="_blank"
                >
                  <p className="border border-[#9fa1a4] inline-block p-2 rounded-full  hover:bg-gray-200 hover:text-black duration-200">
                    <FaFacebookF size={22}></FaFacebookF>
                  </p>
                </Link>

                <Link
                  to={"https://www.linkedin.com/in/zahid8/"}
                  target="_blank"
                >
                  <p className="border border-[#9fa1a4] inline-block p-2 rounded-full  hover:bg-gray-200 hover:text-black duration-200">
                    <FaLinkedinIn size={22}></FaLinkedinIn>
                  </p>
                </Link>

                <Link to={"https://github.com/zahid-official"} target="_blank">
                  <p className="border border-[#9fa1a4] inline-block p-2 rounded-full  hover:bg-gray-200 hover:text-black duration-200">
                    <FaGithub size={22}></FaGithub>
                  </p>
                </Link>

                <Link
                  to={"https://discordapp.com/users/1251522037080391791"}
                  target="_blank"
                >
                  <p className="border border-[#9fa1a4] inline-block p-2 rounded-full  hover:bg-gray-200 hover:text-black duration-200">
                    <FaDiscord size={22}></FaDiscord>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="bg-[#11141b] pt-14 pb-28 px-6 flex-1">
          <div className="max-w-md mx-auto">
            <h3 className="uppercase mt-14 text-3xl">
              <span className="inline-block px-2 py-0.5 bg-[#21252c] font-semibold">
                Contact
              </span>{" "}
              Me
            </h3>

            <p className="mt-2 mb-10">
              IF YOU HAVE QUESTIONS PLEASE LEAVE A MESSAGE
            </p>

            <form>
              <div className="flex flex-col space-y-4">
                <input
                  className="input focus:border-gray-600 bg-[#171a22]  max-w-md rounded join-item"
                  placeholder="Email"
                />
                <textarea
                  placeholder="Message"
                  className="textarea focus:border-gray-600 bg-[#171a22] rounded textarea-lg w-full max-w-md"
                ></textarea>

                <button className="btn bg-[#182030] hover:bg-[#162136] max-w-md border-none text-white">
                  Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* copywrite */}
      <div className="bg-[#13161d] text-white py-8 text-center title-font">
        © This Portfolio is Proudly Owned by Zahidul Islam.
      </div>
    </footer>
  );
};

export default Footer;
