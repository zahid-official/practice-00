import logo from "/assets/logo.png";
import { Link } from "react-router-dom";
import { FaDiscord, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import shape04 from "/assets/shape-04.png";
import shape05 from "/assets/shape-05.png";

const Footer = () => {
  return (
    <>
      <footer className="footer lg:justify-around bg-[#f6fafb] py-20 text-base px-10 relative ">
        <div className="absolute -bottom-14 left-20 z-10 animate__animated animate__flash  animate__infinite	infinite my-element">
          <img src={shape04} alt="" />
        </div>

        <div className="absolute -top-10 right-32 z-10 animate__animated animate__flash  animate__infinite	infinite my-element">
          <img src={shape05} alt="" />
        </div>
        <aside>
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" />
            <h2 className="text-4xl font-bold mt-2">Elex</h2>
          </div>
          <p>
            Elex Industries Ltd.
            <br />
            Providing reliable tech since 2014
          </p>
          <ul className="flex items-center gap-2 mt-2">
            <li>
              <Link to={"https://www.facebook.com/"}>
                {" "}
                <span className="hover:text-[#0866ff]">
                  <FaFacebookSquare size={30} />
                </span>{" "}
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/"}>
                {" "}
                <span className="hover:text-[#1469c7]">
                  <FaLinkedin size={30} />
                </span>{" "}
              </Link>
            </li>
            <li>
              <Link to={"https://www.instagram.com/"}>
                <span className="hover:text-[#255eaa]">
                  <RiInstagramFill size={30} />
                </span>{" "}
              </Link>
            </li>
            <li>
              <Link to={"https://discord.com/"}>
                <span className="hover:text-[#4d6ade]">
                  <FaDiscord size={30} />
                </span>{" "}
              </Link>
            </li>
          </ul>
        </aside>

        <nav>
          <h6 className="text-black font-bold text-xl">Quick Link</h6>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Top Author</a>
          <a className="link link-hover">Top Categories</a>
        </nav>
        <nav>
          <h6 className="text-black font-bold text-xl">Help Center</h6>
          <a className="link link-hover">Courses</a>
          <a className="link link-hover">Support</a>
          <a className="link link-hover">Get Help</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav>
          <h6 className="text-black font-bold text-xl">Contact Info</h6>
          <a className="link link-hover"> Call Us: 1-885-665-2548</a>
          <a className="link link-hover">
            {" "}
            Address: +7811 Vermont Ave, <br /> Los Angeles, CA 90054
          </a>
          <a className="link link-hover">Mail Us: hello@elex.com</a>
        </nav>
      </footer>

      <div className="py-7 px-5 text-lg font-semibold text-center bg-[#f6fafb] border-t-2">
        <p>© Elex is Proudly Owned by Zahidul Islam</p>
      </div>
    </>
  );
};

export default Footer;
