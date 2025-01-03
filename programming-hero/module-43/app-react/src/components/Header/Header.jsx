import PropValidation from "prop-types";
import Logo from "../../assets/logo.png";
import Coin from "../../assets/coin.png";
import Bg from "../../assets/bg.png";
import Banner from "../../assets/banner.png";
import { toast } from "react-toastify";

const Header = ({ handleCoin, coin }) => {
  // credit notification
  const handleCredit = () => {
    toast.success("Credit Added to your Account");
  };

  return (
    <div className="reletive pt-36">
      {/* navbar */}
      <div className="navbar justify-between py-6 sm:px-20 px-4 fixed left-0 top-0 z-20 border-b backdrop-blur-sm bg-[#f9f7f3] bg-opacity-60">
        <div className="strat-point">
          <a className="btn btn-ghost text-xl">
            <img src={Logo} alt="logo" />
          </a>
        </div>

        <div className="end-point sm:gap-3">
          {/* menubar */}
          <div className="menu hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="text-[#131313B3] font-semibold text-base">
                <a>Home</a>
              </li>
              <li className="text-[#131313B3] font-semibold text-base">
                <a>Fixture</a>
              </li>
              <li className="text-[#131313B3] font-semibold text-base">
                <a>Teams</a>
              </li>
              <li className="text-[#131313B3] font-semibold text-base">
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          {/* dropdowun */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
          </div>

          {/* coin */}
          <div className="coin">
            <a className="flex justify-center items-center gap-1 font-semibold border py-4 sm:px-7 px-3 rounded-lg">
              <img src={Coin} alt="coin" />
              <span>{coin}</span>Coin
            </a>
          </div>
        </div>
      </div>

      {/* banner */}
      <div
        className="hero min-h-[80vh] w-full rounded-2xl"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="hero-overlay rounded-2xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="space-y-5">
            <div className="flex justify-center items-center">
              <img src={Banner} alt="banner" />
            </div>
            <h1 className="mb-5 sm:text-5xl text-3xl font-bold">
              Assemble Your Ultimate CPL Cricket Team
            </h1>
            <p className="mb-5">Beyond Boundaries Beyond Limits</p>
            <span className="border p-2 inline-block rounded-2xl">
              <button
                onClick={() => {
                  handleCoin();
                  handleCredit();
                }}
                className="btn bg-gradient-to-br from-[#c76eaa] to-[#e3be58] rounded-xl"
              >
                Claim Free Credit
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// props validation
Header.propTypes = {
  handleCoin: PropValidation.func.isRequired,
  coin: PropValidation.number.isRequired,
};
export default Header;
