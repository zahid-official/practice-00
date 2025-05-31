import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "animate.css";

const MainLayout = () => {
  return (
    <div>
      <header className="sm:w-11/12 sm:mx-auto mx-1 py-4">
        <Navbar></Navbar>
      </header>

      <main className="min-h-[45vh]">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
