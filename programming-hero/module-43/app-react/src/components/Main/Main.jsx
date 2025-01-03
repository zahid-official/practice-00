import PropValidation from "prop-types";
import { useEffect, useState } from "react";
import Player from "./Player";
import SelectedPlayer from "./SelectedPlayer";

const Main = ({ handleChoosePlayer, choosePlayer, removePlayer }) => {
  // state for all players
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("./players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  //state for manageDisplay
  const [display, setDisplay] = useState(true);

  //display available players
  const handleAvailablePlayer = (truthy) => {
    setDisplay(truthy);
  };

  // display selected players
  const handleSelectedPlayers = (falsy) => {
    setDisplay(falsy);
  };

  return (
    <div className="my-24 relative lg:pb-36">
      {/* title */}
      <div className="title flex justify-end mb-8 sticky top-32 z-10">
        <div className="join">
          <button
            onClick={() => handleAvailablePlayer(true)}
            className={`${
              display
                ? "join-item border-none btn text-lg bg-gradient-to-br from-[#c76eaa] to-[#e3be58] rounded-xl"
                : "join-item border-none btn text-lg rounded-xl"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleSelectedPlayers(false)}
            className={`${
              !display
                ? "join-item border-none btn text-lg bg-gradient-to-br from-[#c76eaa] to-[#e3be58] rounded-xl"
                : "join-item border-none btn text-lg rounded-xl"
            }`}
          >
            Selected ({choosePlayer.length})
          </button>
        </div>
      </div>

      {display ? (
        <div>
          <h2 className="sm:text-4xl text-2xl font-bold">Available Players</h2>
          <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 my-8">
            {players.map((data) => (
              <Player
                key={data.id}
                player={data}
                handleChoosePlayer={handleChoosePlayer}
              ></Player>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="sm:text-4xl text-2xl font-bold">
            Selected Players ({choosePlayer.length}/6)
          </h2>
          <div>
            {choosePlayer.map((data) => (
              <SelectedPlayer
                key={data.id}
                selectedPlayer={data}
                removePlayer={removePlayer}
              ></SelectedPlayer>
            ))}
          </div>

          <button
            onClick={() => handleAvailablePlayer(true)}
            className=" mt-10 border-none btn text-lg bg-gradient-to-br from-[#c76eaa] to-[#e3be58] rounded-lg"
          >
            Add More Player
          </button>
        </div>
      )}
    </div>
  );
};

// props validation
Main.propTypes = {
  handleChoosePlayer: PropValidation.func.isRequired,
  removePlayer: PropValidation.func.isRequired,
  choosePlayer: PropValidation.array.isRequired,
};
export default Main;
