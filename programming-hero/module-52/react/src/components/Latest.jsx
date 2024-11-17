import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="container mx-auto flex items-center gap-3">
      <p className="bg-[#D72050] text-white font-semibold text-lg px-8 py-3">
        Latest
      </p>

      <Marquee pauseOnHover={true} className="space-x-10">
        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit harum
          sint architecto ex iste? Voluptatem!
        </Link>

        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit harum
          sint architecto ex iste? Voluptatem!
        </Link>

        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit harum
          sint architecto ex iste? Voluptatem!
        </Link>
      </Marquee>
    </div>
  );
};

export default Latest;
