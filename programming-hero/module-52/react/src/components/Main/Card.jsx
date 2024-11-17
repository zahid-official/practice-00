import { FaEye, FaStar } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";

const Card = (props = {}) => {
  const { news } = props || {};
  console.log(news);
  return (
    <div>
      <div className="p-6 shadow-lg border rounded-lg bg-white">
        <div className="flex items-center mb-4">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="text-sm font-semibold">{news.author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(news.author.published_date).toDateString()}
            </p>
          </div>
          <button className="ml-auto text-gray-500 hover:text-gray-800">
            <BiShareAlt size={20} />
          </button>
        </div>
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="w-full h-[550px] object-contain rounded-lg mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">{news.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {news.details}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span>{news.rating.number}</span>
            <span className="ml-2 text-gray-400">{news.rating.badge}</span>
          </div>
          <div className="flex items-center">
            <FaEye className="mr-1" />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
