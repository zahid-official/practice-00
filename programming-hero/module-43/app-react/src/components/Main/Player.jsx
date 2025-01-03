import PropValidation from "prop-types";
import { FaUserAlt } from "react-icons/fa";
import Coins from "../../assets/coin.png";

const Player = ({ player, handleChoosePlayer }) => {
  const { image, name, country, role, battingType, bowlingType, biddingPrice } =
    player;

  return (
    <div>
      <div className="card bg-base-100 border-2 p-4">
        <div className="rounded-xl">
          <img src={image} alt="player image" className="rounded-t-xl" />
        </div>

        <div className="mt-6 space-y-4">
          <h2 className="text-2xl font-bold flex gap-2 items-center">
            <span>
              <FaUserAlt />
            </span>
            {name}
          </h2>

          <div className="border-b pb-3 flex justify-between items-center">
            <p className="text-[#898989]">
              <i className="fa-solid fa-flag mr-2"></i>
              {country}
            </p>
            <span
              className="bg-base-200 p-2 rounded-md text-sm
            "
            >
              {role}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-semibold">Batting:</p>
            <p className="text-[#131313B3]">{battingType}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-semibold">Bowling:</p>
            <p className="text-[#131313B3]">{bowlingType}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-semibold  ">Price: </p>
            <p className="font-semibold flex gap-1 items-center">
              <img className="h-4 w-4" src={Coins} alt="coin" /> {biddingPrice}
            </p>
          </div>

          <div className="card-actions justify-end">
            <button onClick={() => handleChoosePlayer(player)} className="btn">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// props validation
Player.propTypes = {
  player: PropValidation.object.isRequired,
  handleChoosePlayer: PropValidation.func.isRequired,
};
export default Player;
