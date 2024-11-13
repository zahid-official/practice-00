import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Root = () => {
  return (
    <div>
      <header className="container mx-auto py-7">
        <Navbar></Navbar>
      </header>

      <main className="container mx-auto py-6 min-h-[58vh]">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Root;
