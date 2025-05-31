import { RiBarChartFill, RiUserFollowLine } from "react-icons/ri";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlinePlayLesson } from "react-icons/md";
import ScrollTrigger from "react-scroll-trigger";
import photo02 from "/assets/photo02.png";
import CountUp from "react-countup";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SuccessSection = () => {
  // state for countUp
  const [countUp, setCountUp] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <div>
      <div className="hero  overflow-x-hidden pt-10 pb-28">
        <div className="flex justify-between px-4 gap-8 flex-col lg:flex-row">
          <div  data-aos="fade-right" data-aos-duration="1600" className="flex-1">
            <img src={photo02} />
          </div>

          <div className="flex-1 py-8">
            <ScrollTrigger
              onEnter={() => setCountUp(true)}
              onExit={() => setCountUp(false)}
              className="flex justify-center h-full items-center gap-14 flex-col"
            >
              <div className="flex sm:gap-5 gap-16 sm:flex-row flex-col">
                <div className="bg-white p-4 relative inline-block rounded-lg">
                  <div className="bg-[#fc958a] rounded-xl px-5 py-8 absolute bottom-4">
                    <RiUserFollowLine size={45} color="white" />
                  </div>
                  <div className="pl-24">
                    <h2 className="text-3xl font-bold">
                      {countUp && (
                        <CountUp start={0} end={56829} duration={3} />
                      )}
                      +
                    </h2>
                    <p>Student enrolled</p>
                  </div>
                </div>
                <div className="bg-white p-4 relative inline-block rounded-lg">
                  <div className="bg-[#90afba] rounded-xl px-5 py-8 absolute bottom-4">
                    <IoPlayCircleOutline size={45} color="white" />
                  </div>
                  <div className="pl-24">
                    <h2 className="text-3xl font-bold">
                      {countUp && (
                        <CountUp start={0} end={20853} duration={3} />
                      )}
                      +
                    </h2>
                    <p>Available Tutorials</p>
                  </div>
                </div>
              </div>

              <div className="flex sm:gap-5 gap-16 sm:flex-row flex-col">
                <div className="bg-white p-4 relative inline-block rounded-lg">
                  <div className="bg-[#90bbda] rounded-xl px-5 py-8 absolute bottom-4">
                    <RiBarChartFill size={45} color="white" />
                  </div>
                  <div className="pl-24">
                    <h2 className="text-3xl font-bold">
                      {countUp && (
                        <CountUp start={0} end={98371} duration={3} />
                      )}
                      +
                    </h2>
                    <p>Vocabulary Chart</p>
                  </div>
                </div>
                <div className="bg-white p-4 relative inline-block rounded-lg">
                  <div className="bg-[#a786e5] rounded-xl px-5 py-8 absolute bottom-4">
                    <MdOutlinePlayLesson size={45} color="white" />
                  </div>
                  <div className="pl-24">
                    <h2 className="text-3xl font-bold">
                      {countUp && (
                        <CountUp start={0} end={45053} duration={3} />
                      )}
                      +
                    </h2>
                    <p>Learners Lesson</p>
                  </div>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
