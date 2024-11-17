import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Latest from "../components/Header/Latest";
import Navbar from "../components/Header/Navbar";
import Left from "../components/Main/Left";
import Right from "../components/Main/Right";

const Home = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Header></Header>
        <Latest></Latest>
        <Navbar></Navbar>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-10 py-10">
        <aside className="col-span-3">
          <Left></Left>
        </aside>
        <section className="col-span-6"><Outlet></Outlet></section>
        <aside className="col-span-3"><Right></Right></aside>
      </main>
    </div>
  );
};

export default Home;
