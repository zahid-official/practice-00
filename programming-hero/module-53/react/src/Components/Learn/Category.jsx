/* eslint-disable react/prop-types */
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { PiCertificateDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import cover from "/assets/cover.png";


const Category = ({ category }) => {
    const {lesson_title, id} = category;
  return (
    <Link to={`/learn/lesson/${id}`}>
      <div className="bg-[#eef5f7] text-[#186f7a] rounded-xl py-20 text-center px-5 hover:shadow-xl transition-all duration-300 my-lesson">
        <div className="flex justify-center relative">
          <img src={cover} alt="" />
          <span className="absolute top-4 left-[45%]"><PiCertificateDuotone size={45} color="white" /></span>
        </div>
        <div className="space-y-5 mt-4">
          <h2 className="text-3xl font-bold">{lesson_title}</h2>
          <span className="inline-flex items-center justify-center my-arrow">
          <FaRegArrowAltCircleRight size={38} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Category;
