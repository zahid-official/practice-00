import { Link } from "react-router-dom";
import banner01 from "/assets/Join.png";
import banner02 from "/assets/banner02.png";
import banner03 from "/assets/banner03.png";

// carousel
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, EffectFade]}
          className="mySwiper lg:h-[90vh] custom-gradient"
        >
          {/* slider-01 */}
          <SwiperSlide className="h-full">
            <div className="h-full pt-10 text-white ">
              <div className="flex h-full gap-10 lg:flex-row-reverse flex-col-reverse items-center mx-5 justify-around">
                <div className="flex-1 flex justify-center pb-12">
                  <div className="sm:px-5">
                    <h1 className="sm:text-5xl text-3xl font-bold">
                      Elevate Your Communication 
                      <br className="xl:block hidden" />
                       {' '}Skills Journey!
                    </h1>
                    <p className="py-6 xl:w-[550px] ">
                      Learn languages online with expert instructors and global
                      resources! Progress at your own pace with personalized
                      lessons, interactive tools, and a supportive community.
                      Whether you are a beginner or refining your skills, our
                      platform has everything you need to succeed. Unlock your
                      full potential on your language journey.
                    </p>
                    <Link to={"/learn"}>
                      <button className="btn bg-[#098a9b] hover:bg-[#18717c] text-white text-xl h-14 sm:px-16 border-none px-8">
                        Take Action
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="flex-1 lg:flex justify-end items-center">
                  <img className="max-h-[470px]" src={banner02} />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* slider-02 */}
          <SwiperSlide className="h-full">
            <div className="h-full pt-10 text-white ">
              <div className="flex h-full gap-10 lg:flex-row flex-col-reverse items-center mx-5 justify-around">
                <div className="flex-1 flex justify-center pb-12">
                  <div className="sm:px-5">
                    <h1 className="sm:text-5xl text-3xl font-bold">
                      Enhance Your Language <br className="xl:block hidden" />
                      Learning Experience!
                    </h1>
                    <p className="py-6 xl:w-[550px] ">
                      Master languages online at your own pace with personalized
                      lessons from native-speaking experts. Benefit from
                      interactive tools, real-time feedback, and a global
                      community of learners to make your experience engaging and
                      effective. Access resources from around the world to
                      deepen your understanding and build confidence.
                    </p>
                    <Link to={"/learn"}>
                      <button className="btn bg-[#098a9b] hover:bg-[#18717c] text-white text-xl h-14 sm:px-16 border-none px-8">
                        Take Action
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="flex-1 lg:flex justify-start items-center">
                  <img className="max-h-[470px]" src={banner01} />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* slider-03 */}
          <SwiperSlide className="h-full">
            <div className="h-full pt-10 text-white ">
              <div className="flex h-full gap-10 lg:flex-row flex-col-reverse items-center mx-5 justify-around">
                <div className="flex-1 flex justify-center pb-12">
                  <div className="sm:px-5">
                    <h1 className="sm:text-5xl text-3xl font-bold">
                      Transform the Journey of{" "}
                      <br className="xl:block hidden" /> Communication
                      Excellence!
                    </h1>
                    <p className="py-6 xl:w-[550px] ">
                      Discover languages online with professional teachers and
                      global tools! Learn at your own pace with customized
                      sessions, interactive features, and a connected community.
                      Whether you are a beginner or refining your skills, our
                      platform has everything you need to succeed. Enjoy
                      flexible learning and unlock your full potential.
                    </p>
                    <Link to={"/learn"}>
                      <button className="btn bg-[#098a9b] hover:bg-[#18717c] text-white text-xl h-14 sm:px-16 border-none px-8">
                        Move Ahead
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="flex-1 lg:flex justify-start items-center">
                  <img className="max-h-[470px]" src={banner03} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
