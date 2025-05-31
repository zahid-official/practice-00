import SliderSection from "./SliderSection";
import feedback from "/assets/feedback-01.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FeedbackSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: false,
    });
  }, []);
  return (
    <div className="flex overflow-x-hidden lg:flex-row flex-col gap-10 w-11/12 mx-auto py-16">
      <div data-aos="zoom-in-right" className="flex-1">
        <img src={feedback} alt="" />
      </div>

      <div className="flex-1">
        {/* title */}
        <div className="text-center mb-8">
          <h3 className="text-[#0683a2] font-bold mb-3">feedback</h3>
          <h2 className="sm:text-4xl text-3xl font-bold">
            Our Students Are Our Strength. <br className="xl:block hidden" />
            See What They Say About Us
          </h2>
        </div>

        <SliderSection></SliderSection>
      </div>
    </div>
  );
};

export default FeedbackSection;
