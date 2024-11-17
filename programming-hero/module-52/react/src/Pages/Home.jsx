import Header from "../components/Header";
import Latest from "../components/Latest";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <Latest></Latest>
        <Navbar></Navbar>
      </header>
    </div>
  );
};

export default Home;
