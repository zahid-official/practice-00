import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/Main/Main";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  // handle-coin
  const [coin, setCoin] = useState(0);
  const handleCoin = () => {
    setCoin(coin + 6000000);
  };

  // state for choose player
  const [choosePlayer, setChoosePlayer] = useState([]);
  const handleChoosePlayer = (player) => {
    // maximum player validation
    if (choosePlayer.length + 1 > 6) {
      return toast.error("Maximum Player Selected");
    }
    // double click validation
    const isExist = choosePlayer.find((data) => data.id === player.id);
    if (isExist) {
      return toast.error(`${player.name} already Selected`);
    }

    // balance validation
    if (coin <= 0 || coin < player.biddingPrice) {
      return toast.error("Insufficient balance. Please add funds to proceed");
    }

    toast.success(`Congrats! ${player.name} in the squad`);
    setChoosePlayer([...choosePlayer, player]);
    setCoin(coin - player.biddingPrice);
  };

  // remove player from selected list
  const removePlayer = (selectedPlayer) => {
    const remain = choosePlayer.filter((data) => data.id !== selectedPlayer.id);
    toast.warn(`${selectedPlayer.name} Removed from squad`);
    setChoosePlayer(remain);
  };

  return (
    <div>
      <div className="sm:mx-20 mx-4">
        <Header handleCoin={handleCoin} coin={coin}></Header>

        <Main
          handleChoosePlayer={handleChoosePlayer}
          choosePlayer={choosePlayer}
          removePlayer={removePlayer}
        ></Main>
      </div>

      <Footer></Footer>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        F
      ></ToastContainer>
    </div>
  );
}

export default App;
