import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Root = () => {
    return (
        <div>
            <header className="bg-base-200">
                <Navbar></Navbar>
                <Footer></Footer>
            </header>
        </div>
    );
};

export default Root;