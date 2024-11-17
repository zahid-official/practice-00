import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold"> Find Us on</h1>
      <div className="join flex *:bg-white join-vertical">
          <button className="btn join-item"><FaFacebook size={23}></FaFacebook> Facebook</button>
          <button className="btn join-item"><FaInstagram size={23}></FaInstagram> Instagram</button>
          <button className="btn join-item"><FaTwitter size={23}></FaTwitter> Twitter</button>
        </div>
    </>
  );
};

export default FindUs;
