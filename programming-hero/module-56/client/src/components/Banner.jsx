const Banner = () => {
  return (
    <div
      className={`bg-[url(/assets/04.bg.jpeg)] bg-center bg-cover h-[86vh] flex items-center px-8`}
    >
      <div className="flex-1 lg:block hidden"></div>
      <div className="text-white flex-1 space-y-5">
        <h2 className="sm:text-6xl text-5xl rancho">
          Would you like a Cup of Delicious Coffee?
        </h2>
        <p>
          {`It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of `}{" "}
          <br className="2xl:block hidden" />{" "}
          {`every moment!!! Enjoy the beautiful moments and make them memorable.`}
        </p>
        <button className="btn rancho text-xl bg-[#c99d62] border-none hover:text-white hover:bg-transparent hover:outline hover:outline-1 hover:outline-white rounded-none px-12 transition duration-500">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
