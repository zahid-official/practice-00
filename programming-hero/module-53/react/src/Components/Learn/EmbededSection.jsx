import { Link } from "react-router-dom";

const EmbededSection = () => {
  return (
    <div className="grid gap-10 xl:grid-cols-3 lg:grid-cols-2 w-11/12 mx-auto pb-28">
      {/* video-01 */}
      <div>
        <iframe
          width="100%"
          height="350px"
          border="1px solid red"
          src="https://www.youtube.com/embed/LrXHizFaol0"
          title="あいうえおのうた (Myu sings AIUEO)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <div className="mt-6">
          <Link to={"/tutorials"}>
            <button className="btn custom-btn text-xl h-14 sm:px-16">
              View more
            </button>
          </Link>
        </div>
      </div>

      {/* video-02 */}
      <div>
        <iframe
          width="100%"
          height="350px"
          src="https://www.youtube.com/embed/gF6-VvWL_po"
          title="あいうえうたお♪"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="mt-6">
          <Link to={"/tutorials"}>
            <button className="btn custom-btn text-xl h-14 sm:px-16">
              View more
            </button>
          </Link>
        </div>
      </div>

      {/* video-03 */}
      <div>
        <iframe
          width="100%"
          height="350px"
          src="https://www.youtube.com/embed/qBClLIT_aLU"
          title="I Can Speaking Japanese"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="mt-6">
          <Link to={"/tutorials"}>
            <button className="btn custom-btn text-xl h-14 sm:px-16">
              View more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmbededSection;
