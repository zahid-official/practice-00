import logo from "/assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col gap-2 py-8 justify-center items-center">
      <div>
        <img src={logo} alt="" />
      </div>

      <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
      
      <div className="text-lg font-bold">
        <span className="text-[#403F3F]">{moment().format("dddd,")}</span>
        <span className="text-[#706F6F]">
          {moment().format(" MMMM Do YYYY")}
        </span>
      </div>
    </div>
  );
};

export default Header;
