import svg1 from "/assets/1.svg";
import svg2 from "/assets/2.svg";
import svg3 from "/assets/3.svg";
import svg4 from "/assets/4.svg";
import icon from "/assets/icon.png";
import icon1 from "/assets/icon1.png";
import icon2 from "/assets/icon2.png";
import icon3 from "/assets/icon3.png";
import icon4 from "/assets/icon4.png";
import icon5 from "/assets/icon5.png";
import icon6 from "/assets/icon6.png";
import icon7 from "/assets/icon7.png";
import icon8 from "/assets/icon8.png";
import icon9 from "/assets/icon9.svg";
import icon10 from "/assets/icon10.png";
import icon11 from "/assets/icon11.svg";
import icon12 from "/assets/icon12.png";
import icon13 from "/assets/icon13.svg";
import icon14 from "/assets/icon14.png";

const Skill = () => {
  return (
    <div className="pb-36">
      <div className="flex flex-col justify-center items-center">
        <h4 className="uppercase sm:text-base text-sm text-[#606060]">
          <img src={svg1} className="ml-4" alt="" />
          Expertise
        </h4>
        <h3 className="sm:text-5xl text-4xl title-font mt-1.5">
          <span className="font-bold">Skill </span> Set
        </h3>

        {/* techskills */}
        <div className="mt-12 flex justify-center flex-wrap gap-10">
          {/* skill-1 */}
          <div className="border pt-10 pb-14 px-7 max-w-96 rounded-lg">
            <div>
              <img src={svg2} className="w-20 sm:ml-9" alt="" />
            </div>

            <div>
              <h3 className="title-font text-2xl font-semibold mb-3">
                UI-UX Design
              </h3>
              <hr />
              <p className="pt-4">
                I specialize in creating clean, responsive, and visually
                engaging websites using my core skills in HTML, CSS, Bootstrap,
                Tailwind and Material UI, ensuring an optimal user experience
                across all devices.
              </p>

              <div className="flex gap-2.5 mt-6 flex-wrap">
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon}
                    className="h-14 border rounded-md p-1"
                    alt=""
                  />
                </div>
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon1}
                    className="h-14 border rounded-md p-1"
                    alt=""
                  />
                </div>
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon2}
                    className="h-14 border rounded-md p-1"
                    alt=""
                  />
                </div>
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon3}
                    className="h-14 border rounded-md p-1"
                    alt=""
                  />
                </div>
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon4}
                    className="h-14 border rounded-md p-2"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* skill-2 */}
          <div className="border lg:translate-y-20 pt-10 pb-14 px-7 max-w-96 rounded-lg">
            <div>
              <img src={svg3} className="w-20 sm:ml-9" alt="" />
            </div>

            <div>
              <h3 className="title-font text-2xl font-semibold mb-3">
                Frontend Developement
              </h3>
              <hr />
              <p className="pt-4">
                As a frontend developer, I apply my skills in Git, GitHub,
                JavaScript, React and React Router to create dynamic,
                high-performance web applications that are both scalable and
                maintainable.
              </p>

              <div className="flex gap-2.5 mt-6 flex-wrap">
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon5}
                    className="h-14 border rounded-md p-1"
                    alt=""
                  />
                </div>
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon6}
                    className="h-14 border rounded-md p-1"
                    alt=""
                  />
                </div>
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon7}
                    className="h-14 border rounded-md p-1"
                    alt=""
                  />
                </div>
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon8}
                    className="h-14 border rounded-md p-1"
                    alt=""
                  />
                </div>
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon9}
                    className="h-14 border rounded-md p-2"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* skill-3 */}
          <div className="border xl:translate-y-40 lg:translate-y-28 pt-10 pb-14 px-7 max-w-96 rounded-lg">
            <div>
              <img src={svg4} className="w-20 sm:ml-9" alt="" />
            </div>

            <div>
              <h3 className="title-font text-2xl font-semibold mb-3">
                Backend Developement
              </h3>
              <hr />
              <p className="pt-4">
              I have a solid strong background in backend development with Firebase, JWT, Express.js, Node.js and MongoDB, creating scalable and secure applications with efficient data handling.
              </p>

              <div className="flex gap-2.5 mt-6 flex-wrap">
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon10}
                    className="h-14 border rounded-md p-1.5"
                    alt=""
                  />
                </div>
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon11}
                    className="h-14 border rounded-md p-1.5"
                    alt=""
                  />
                </div>
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon12}
                    className="h-14 border rounded-md p-1.5"
                    alt=""
                  />
                </div>
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon13}
                    className="h-14 border rounded-md p-1.5"
                    alt=""
                  />
                </div>
                <div className="hover:-translate-y-2 duration-300 cursor-pointer">
                  <img
                    src={icon14}
                    className="h-14 border rounded-md p-1.5"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
