import { Link } from "react-router-dom";
import logo from "/assets/01.logo.png";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className={`bg-[url(/assets/03.bg.jpg)] py-16 px-6`}>
      <div className=" container mx-auto flex md:flex-row flex-col gap-10">
        {/* left */}
        <div className="space-y-6 flex-1">
          <div className="space-y-2">
            <div className="flex justify-center max-w-[210px]">
              <img src={logo} alt="logo" className="h-20" />
            </div>
            <h2 className="text-[#331A15] text-4xl font-semibold rancho">
              Espresso Emporium
            </h2>
            <p>
              Always ready to be your friend. Come & Contact with us to share{" "}
              <br className="xl:block hidden" />
              your memorable moments, to share with your best companion.
            </p>
          </div>

          <ul className="flex gap-3 text-[#331a15]">
            <Link to={"https://www.facebook.com/"}>
              <li>
                <FaFacebookSquare size={30} />
              </li>
            </Link>

            <Link to={"https://www.x.com/"}>
              <li>
                <FaTwitter size={30} />
              </li>
            </Link>

            <Link to={"https://www.instagram.com/"}>
              <li>
                <FaInstagram size={30} />
              </li>
            </Link>

            <Link to={"https://www.linkedin.com/"}>
              <li>
                <FaLinkedinIn size={30} />
              </li>
            </Link>
          </ul>

          <div className="space-y-2">
            <h2 className="text-[#331A15] text-3xl font-semibold rancho">
              Get in Touch
            </h2>
            <p className="flex items-center gap-1">
              <FaPhoneAlt /> +88 01533 333 333
            </p>
            <p className="flex items-center gap-1">
              <IoMail size={18} /> info@gmail.com
            </p>
            <p className="flex items-center gap-1">
              <FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka
            </p>
          </div>
        </div>

        {/* right */}
        <div className="flex-1 md:mt-14">
          <div className="w-full lg:max-w-lg mx-auto">
            <form className="space-y-3.5">
              <h2 className="text-[#331A15] text-4xl font-semibold rancho">
                Connect with Us
              </h2>

              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input border-2 "
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  required
                />
              </div>
              <textarea
                placeholder="Message"
                className="textarea textarea-md w-full h-32 text-base"
              ></textarea>

              <div className="form-control mt-6">
                <button className="btn btn-outline text-lg font-bold rancho text-[#331a15] hover:text-white hover:bg-[#331a15] rounded-xl">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
