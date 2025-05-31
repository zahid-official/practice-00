import { useEffect } from "react";
import photo01 from "/assets/photo01.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-back",
    });
  }, []);
  return (
    <>
      <div className="hero overflow-x-hidden">
        <div
          className="hero-content gap-8 flex-col lg:flex-row-reverse"
          data-aos="fade-left"
        >
          <img src={photo01} />
          <div data-aos="fade-right">
            <h1 className="sm:text-4xl text-2xl font-bold">
              We Are <span className="text-[#098b99]">Elex!</span> The Best
              Online Learning Platform
            </h1>
            <p className="py-6">
              Elexs mission is to make language learning accessible, engaging,
              and effective for everyone. We provide personalized lessons,
              interactive tools, and a supportive community to help users master
              new languages, build confidence, and break down communication
              barriers.
            </p>
            <p>
              To learn vocabulary, Elex offers a range of methods, including
              flashcards, spaced repetition, and context-based exercises. These
              techniques allow users to effectively memorize and apply new words
              in real-life situations. The platform adapts to each users
              progress, ensuring efficient vocabulary building and long-term
              retention.
            </p>
            <Link to={"/learn"}>
              <button className="btn bg-[#098a9b] hover:bg-[#18717c] mt-8 text-white text-xl h-14 sm:px-12 border-none px-8">
                Explore Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
