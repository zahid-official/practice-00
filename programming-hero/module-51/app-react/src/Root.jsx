import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Root = () => {
  return (
    <div>
      <header className="bg-base-200">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[64vh]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
