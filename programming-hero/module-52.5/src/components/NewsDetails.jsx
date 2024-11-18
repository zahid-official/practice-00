import { Link } from "react-router-dom";

const NewsDetails = (props = {}) => {
  const { data } = props || {};
  const { title, image_url, details, category_id } = data;

  return (
    <div>
      <div className="card p-8 bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden">
        {/* Thumbnail */}
        <img
          src={image_url}
          alt="thumbnail"
          className="rounded-t-xl object-cover"
        />

        {/* Card Body */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>

          {/* Details */}
          <p className="text-gray-700 text-sm line-clamp-3">{details}</p>
        </div>

        {/* Card Footer */}
        <span>
          <Link to={`/category/${category_id}`}>
            <button className="btn rounded-none bg-[#D72050] text-white ml-4">
              All news in this category
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NewsDetails;
