import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Layout = () => {
    const location = useLocation();
  return (
    <div>
        <div>
            {location.pathname === '/' || <Navbar></Navbar>}
        </div>
      <Outlet></Outlet>
      <div id="contact">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
