import { useState } from "react";
import Navbar from "./components/Navbar";
import { RiMenu2Fill, RiCloseCircleLine } from "react-icons/ri";
import PriceOption from "./components/PriceOption";
import Charts from "./components/Charts";
import BarCharts from "./components/BarCharts";
import Axios from "./components/Axios";

function App() {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/blog", name: "Blog" },
    { id: 5, path: "/profile/:username", name: "Profile" },
  ];

  // state
  const [click, setClick] = useState(false);

  return (
    <>
      {/* <nav className="p-8">
        <span
          className="md:hidden text-2xl"
          onClick={() => setClick(!click)}
        >
          {click ? <RiCloseCircleLine /> : <RiMenu2Fill />}
        </span>

        <ul
          className={`md:flex gap-10 bg-fuchsia-300 absolute md:static duration-700 ${
            click ? "top-16" : "-top-56"
          } `}
        >
          {routes.map((route) => (
            <Navbar key={route.id} route={route}></Navbar>
          ))}
        </ul>
      </nav> */}

      {/* <PriceOption></PriceOption> */}
      {/* <Charts></Charts> */}
      {/* <BarCharts></BarCharts> */}
      <Axios></Axios>
    </>
  );
}

export default App;
