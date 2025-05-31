import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewer01 from "/assets/reviewer-01.jpg";
import reviewer02 from "/assets/reviewer-02.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

const SliderSection = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div>
      <Swiper
        mousewheel={width > 1023? true : false}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Mousewheel, Autoplay]}
        className="mySwiper xl:h-[600px] lg:h-[680px] sm:h-[640px] h-[820px]"
      >
        {/* slider-01 */}
        <SwiperSlide className="">
          <div>
            <div className="bg-white px-8 py-12 rounded-br-3xl rounded-t-3xl space-y-3">
              <h3 className="text-2xl text-[#0683a2] font-bold">
                Great Learning Experience With Elex Team!
              </h3>
              <p>
                Instructors from around the world teach millions of students on
                Elex. We provide the tools and skills to teach what you love.
                And you can also achieve your goal with us.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <div>
                <img src={reviewer01} alt="" className="rounded-full" />
              </div>
              <p className="text-lg font-semibold">Jennifer Watson, Student</p>
            </div>
          </div>
        </SwiperSlide>

        {/* slider-02 */}
        <SwiperSlide className="">
          <div>
            <div className="bg-white px-8 py-12 rounded-br-3xl rounded-t-3xl space-y-3">
              <h3 className="text-2xl text-[#0683a2] font-bold">
                Great Quality Trainer!
              </h3>
              <p>
              Instructors worldwide teach millions of students on Elex, providing top tools and resources to help learners develop essential skills for success.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <div>
                <img src={reviewer02} alt="" className="rounded-full" />
              </div>
              <p className="text-lg font-semibold">Jennifer Watson, Student</p>
            </div>
          </div>
        </SwiperSlide>

        {/* slider-03 */}
        <SwiperSlide className="">
          <div>
            <div className="bg-white px-8 py-12 rounded-br-3xl rounded-t-3xl space-y-3">
              <h3 className="text-2xl text-[#0683a2] font-bold">
                Great Learning Experience With Elex Team!
              </h3>
              <p>
                Instructors from around the world teach millions of students on
                Elex. We provide the tools and skills to teach what you love.
                And you can also achieve your goal with us.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <div>
                <img src={reviewer01} alt="" className="rounded-full" />
              </div>
              <p className="text-lg font-semibold">Jennifer Watson, Student</p>
            </div>
          </div>
        </SwiperSlide>

        {/* slider-04 */}
        <SwiperSlide className="">
          <div>
            <div className="bg-white px-8 py-12 rounded-br-3xl rounded-t-3xl space-y-3">
              <h3 className="text-2xl text-[#0683a2] font-bold">
                Great Quality Trainer!
              </h3>
              <p>
              Instructors worldwide teach millions of students on Elex, providing top tools and resources to help learners develop essential skills for success.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <div>
                <img src={reviewer02} alt="" className="rounded-full" />
              </div>
              <p className="text-lg font-semibold">Jennifer Watson, Student</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderSection;
