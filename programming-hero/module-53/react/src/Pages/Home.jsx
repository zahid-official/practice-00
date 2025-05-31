import AboutSection from "../Components/Home/AboutSection";
import Banner from "../Components/Home/Banner";
import FeedbackSection from "../Components/Home/FeedbackSection";
import FeatureSection from "../Components/Home/FeatureSection";
import SuccessSection from "../Components/Home/SuccessSection";
import Title from "../Components/Home/Title";
import JoinSection from "../Components/Home/JoinSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import shape01 from "/assets/shape-01.svg";
import shape02 from "/assets/shape-02.svg";
import shape03 from "/assets/shape-03.svg";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <div className=" overflow-x-hidden">
      {/* Banner Section */}
      <section>
        <Banner></Banner>
      </section>

      {/* About Section */}
      <section className="sm:px-5 relative">
        <div className="absolute -top-16 left-16 z-10 animate__animated animate__flash  animate__infinite	infinite my-element">
          <img src={shape01} alt="" />
        </div>
        <div data-aos="fade-up">
          <Title
            section={"About Elex"}
            heading1={"Upgrade your learning Skills"}
            heading2={"and Upgrade Life"}
          ></Title>
        </div>
        <AboutSection></AboutSection>
      </section>

      {/* Success Section */}
      <section className="bg-[#eef5f7] mt-10 relative">
        <div className="absolute -top-24 right-16 z-10">
          <img src={shape02} alt="" />
        </div>
        <div data-aos="fade-up">
          <Title
            section={"Start To Success"}
            heading1={"Start your journey & Achieve your goal"}
            heading2={""}
          ></Title>
        </div>
        <SuccessSection></SuccessSection>
      </section>

      {/* Feature Section */}
      <section className="relative">
        <div className="absolute top-20 left-28 z-10 animate__animated animate__flash  animate__infinite	infinite my-element">
          <img src={shape03} alt="" />
        </div>
        <div data-aos="fade-up">
          <Title
            section={"Our Features"}
            heading1={"Why You Should Choose Elex"}
            heading2={""}
          ></Title>
        </div>
        <FeatureSection></FeatureSection>
      </section>

      {/* feedback Section */}
      <section className="bg-[#eef5f7] mt-10 py-16">
        <FeedbackSection></FeedbackSection>
      </section>

      {/* Join Us */}
      <section data-aos="fade-up" data-aos-duration="2000">
        <JoinSection></JoinSection>
      </section>
    </div>
  );
};

export default Home;
