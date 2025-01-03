import PropValidation from "prop-types";

const SelectedPlayer = ({ selectedPlayer, removePlayer }) => {
  const { image, name, battingType } = selectedPlayer;
  return (
    <div>
      <div className="flex justify-between items-center border-2 p-4 my-8 rounded-xl">
        <div className="flex items-center gap-4">
          <img className="w-20 rounded-xl" src={image} alt="selected-player" />
          <div>
            <h2 className="text-xl">{name}</h2>
            <p className="text-sm text-[#13131399]">{battingType}</p>
          </div>
        </div>
        <button
          onClick={() => removePlayer(selectedPlayer)}
          className="btn bg-transparent border-none"
        >
          <i className="fa-solid fa-trash text-red-500 text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

// props validation
SelectedPlayer.propTypes = {
  selectedPlayer: PropValidation.object.isRequired,
  removePlayer: PropValidation.func.isRequired,
};
export default SelectedPlayer;
