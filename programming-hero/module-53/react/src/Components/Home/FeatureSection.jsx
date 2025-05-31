import feature01 from "/assets/feature-1.svg";
import feature02 from "/assets/feature-2.svg";
import feature03 from "/assets/feature-3.svg";
import feature04 from "/assets/feature-4.svg";
import { MdArrowForwardIos } from "react-icons/md";

const FeatureSection = () => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-10 text-center container mx-auto px-4 pt-5 pb-28">
      {/* card-01 */}
      <div className="bg-[#eef5f7] rounded-xl py-16 px-5 custom-card">
        <div className="flex justify-center">
          <img src={feature01} alt="" />
        </div>
        <div className="space-y-5 mt-4 relative">
          <h2 className="text-3xl font-bold">Expert-Led Video Courses</h2>
          <p>
            Instructors from around the world teach millions of students on Elex
            through video In-Demand Trendy Topics
          </p>
          <span className="absolute -bottom-10 left-32 border inline-block p-4 rounded-full hover:bg-[#08889e] hover:text-white"><MdArrowForwardIos></MdArrowForwardIos></span>
        </div>
      </div>

      {/* card-02 */}
      <div className="bg-[#eef5f7] rounded-xl py-16 px-5 custom-card">
        <div className="flex justify-center">
          <img src={feature02} alt="" />
        </div>
        <div className="space-y-5 mt-4 relative">
          <h2 className="text-3xl font-bold">In-Demand Trendy Topics</h2>
          <p>
            In-Demand Trendy Topics cover the latest skills, knowledge,
            empowering learners worldwide to stay ahead in their fields.
          </p>
          <span className="absolute -bottom-10 left-32 border inline-block p-4 rounded-full hover:bg-[#08889e] hover:text-white"><MdArrowForwardIos></MdArrowForwardIos></span>
        </div>
      </div>

      {/* card-03 */}
      <div className="bg-[#eef5f7] rounded-xl py-16 px-5 custom-card">
        <div className="flex justify-center">
          <img src={feature03} alt="" />
        </div>
        <div className="space-y-5 mt-4 relative">
          <h2 className="text-3xl font-bold">Segment Your Learning</h2>
          <p>
            Segment Your Learning by focusing on specific topics, ensuring a
            personalized and efficient educational experience.
          </p>
          <span className="absolute -bottom-10 left-32 border inline-block p-4 rounded-full hover:bg-[#08889e] hover:text-white"><MdArrowForwardIos></MdArrowForwardIos></span>
        </div>
      </div>

      {/* card-04 */}
      <div className="bg-[#eef5f7] rounded-xl py-16 px-5 custom-card">
        <div className="flex justify-center">
          <img src={feature04} alt="" />
        </div>
        <div className="space-y-5 mt-4 relative">
          <h2 className="text-3xl font-bold">Always Interactive Learning</h2>
          <p>Interactive Learning engages students with activities, quizzes, and real-time feedback to boost knowledge retention.
          </p>
          <span className="absolute -bottom-10 left-32 border inline-block p-4 rounded-full hover:bg-[#08889e] hover:text-white"><MdArrowForwardIos></MdArrowForwardIos></span>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
