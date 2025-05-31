import Navbar from "../../Shared/Navbar";
import About from "./About";
import Banner from "./Banner";
import Marquee from "react-fast-marquee";
import Skill from "./Skill";
import Projects from "./Projects";
import { useEffect, useState } from "react";

const Home = () => {
  // state
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <div>
      <header
        className="bg-[url(/assets/bg.png)] bg-left-bottom pt-32 pb-36"
        id="banner"
      >
        <div
          className={`fixed top-0 w-full z-40 ${
            isScroll ? "bg-white backdrop-blur-sm bg-opacity-70" : ""
          }`}
        >
          <Navbar></Navbar>
        </div>

        <div className="sm:pt-14 mt-5 px-5">
          <Banner></Banner>
        </div>
      </header>

      {/* about */}
      <section id="about">
        <div className=" sm:pt-10 pb-36 container px-6 mx-auto">
          <About></About>
        </div>
      </section>

      {/* marquee */}
      <section className="sm:text-[170px] text-7xl font-bold title-font bg-black text-white sm:py-24 py-16">
        <Marquee pauseOnHover={true} speed={200}>
          Designing impactful digital experiences that elevate brands and foster
          meaningful connections with their audiences.
        </Marquee>
      </section>

      {/* skill */}
      <section className=" sm:pt-44 pt-28 container px-6 mx-auto" id="skills">
        <Skill></Skill>
      </section>

      {/* projects */}
      <section className=" lg:pt-32 pb-72 container px-6 mx-auto" id="projects">
        <Projects></Projects>
      </section>
    </div>
  );
};

export default Home;
