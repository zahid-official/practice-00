import { Link } from "react-router-dom";
import project1 from "/assets/project1.png";
import project2 from "/assets/project2.png";
import project3 from "/assets/project3.png";

const Projects = () => {
  return (
    <div className="xl:w-10/12 mx-auto ">
      <div className="flex flex-col justify-center items-center">
        <h4 className="uppercase sm:text-base text-sm text-[#606060]">
          Featured
        </h4>
        <h3 className="sm:text-6xl relative text-4xl font-bold title-font mt-1.5">
          <span className="absolute custom-text -z-10  -left-[3px] text-slate-600">
            PROJECTS
          </span>
          PROJECTS
        </h3>
      </div>

      <div className="xl:grid grid-cols-3 flex justify-center lg:flex-nowrap flex-wrap gap-10 mt-16">
        {/* project-3 */}
        <div className="border  lg:translate-y-48 relative group overflow-hidden">
          {/* overlay */}
          <div className="w-full -translate-y-full group-hover:translate-y-0 duration-700 h-full flex gap-3 justify-center items-center bg-[#00000069] absolute top-0 left-0">
            <Link to={"https://trackbook-official.vercel.app/"} target="_blank">
              <button className="text-white bg-black border-none hover:text-black btn">
                Live View
              </button>
            </Link>

            <Link to={"/project3"}>
              <button className="text-white bg-black border-none hover:text-black btn">
                More Details
              </button>
            </Link>
          </div>

          <img src={project3} alt="" />
        </div>
        {/* project-2 */}
        <div className="border lg:translate-y-24 pb-5 group relative overflow-hidden">
          {/* overlay */}
          <div className="w-full -translate-y-full group-hover:translate-y-0 duration-700 h-full flex gap-3 justify-center items-center bg-[#00000069] absolute top-0 left-0">
            <Link to={"https://viso-official.surge.sh/"} target="_blank">
              <button className="text-white bg-black border-none hover:text-black btn">
                Live View
              </button>
            </Link>

            <Link to={"/project2"}>
              <button className="text-white bg-black border-none hover:text-black btn">
                More Details
              </button>
            </Link>
          </div>

          <img src={project2} alt="" />
        </div>

        {/* project-1 */}
        <div className="relative overflow-hidden group">
          {/* overlay */}
          <div className="w-full -translate-y-full group-hover:translate-y-0 duration-700 h-full flex gap-3 justify-center items-center bg-[#00000069] absolute top-0 left-0">
            <Link to={"http://elex.surge.sh/"} target="_blank">
              <button className="text-white bg-black border-none hover:text-black btn">
                Live View
              </button>
            </Link>

            <Link to={"/project1"}>
              <button className="text-white bg-black border-none hover:text-black btn">
                More Details
              </button>
            </Link>
          </div>

          <img src={project1} className="border" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
