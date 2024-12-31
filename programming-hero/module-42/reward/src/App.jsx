import { useState } from "react";
import Banner from "./components/Header/Banner/Banner";
import Header from "./components/Header/Header";
import Title from "./components/Header/Title/Title";
import Recipes from "./components/Main/Recipes";
import Sidebar from "./components/Main/Sidebar";

function App() {
  // state for preparing
  const [queue, setQueue] = useState([]);
  const handleQueue = (card) => {
    // validation
    const isExist = queue.find((item) => item.recipe_id === card.recipe_id);
    if (isExist) {
      return alert("Already Added");
    }
    setQueue([...queue, card]);
  };

  // state for total-time
  const [totalTime, setTotalTime] = useState(0);
  // state for total-calories
  const [totalCalories, setTotalCalories] = useState(0);

  // state for cooking
  const [cooking, setCooking] = useState([]);
  const handleCooking = (item) => {
    setCooking([...cooking, item]);

    // remove from preparing
    const remain = queue.filter((i) => i.recipe_id !== item.recipe_id);
    setQueue(remain);

    // set Total-total
    setTotalTime(totalTime + item.preparing_time);
    // set Total-calories
    setTotalCalories(totalCalories + item.calories);
  };

  return (
    <div className="container mx-auto">
      <Header></Header>
      <Banner></Banner>
      <Title></Title>

      <div className="flex gap-6 lg:flex-row flex-col mx-3 my-12">
        <Recipes handleQueue={handleQueue}></Recipes>
        <Sidebar
          queue={queue}
          handleCooking={handleCooking}
          cooking={cooking}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </div>
    </div>
  );
}

export default App;
