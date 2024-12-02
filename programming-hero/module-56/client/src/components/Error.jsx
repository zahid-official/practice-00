import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import error from "/assets/12.404.gif";
import { FaArrowLeft } from "react-icons/fa6";

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-16 pb-10 flex flex-col items-center justify-center ">
        <Link to={'/'}>
          <h2 className="flex items-center gap-2 rancho text-4xl font-semibold text-[#372727]">
            <FaArrowLeft size={23} /> Back to home
          </h2>
        </Link>
        <img src={error} alt="" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
