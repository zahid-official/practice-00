import BannerImg from "../../../assets/images/1.png";
const Banner = () => {
  return (
    <div className="mx-2">
      <div
        className="hero h-[75vh] rounded-2xl"
        style={{
          backgroundImage: `url(${BannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40 rounded-2xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="space-y-4">
            <h1 className="sm:text-5xl text-3xl font-bold">
              Discover an exceptional cooking <br className="lg:block hidden"/> class tailored for you!
            </h1>
            <p className="">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve <br className="lg:block hidden"/> 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <button className="btn btn-outline text-white hover:bg-[#0BE58A] hover:text-black rounded-3xl mr-4">Our Feedback</button>
            <button className="btn btn-outline text-white hover:bg-[#0BE58A] hover:text-black rounded-3xl">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
