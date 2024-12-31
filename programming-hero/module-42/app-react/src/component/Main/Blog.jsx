import MyProps from "prop-types";
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleBookmark, handleReadig }) => {
  const {
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    title,
    hashtags,
    id,
  } = blog;

  return (
    <>
      <div className="cover-photo">
        <img
          className="w-full rounded-xl object-cover"
          src={cover}
          alt="cover-photo"
        />
      </div>

      <div className="flex justify-between items-center py-5">
        <div className="author flex items-center gap-4">
          <img className="w-14" src={author_img} alt="author-photo" />
          <div>
            <h3 className="text-lg font-semibold">{author}</h3>
            <p className="text-sm">{posted_date}</p>
          </div>
        </div>

        <div className="reading flex items-center gap-2">
          <span className="text-[#11111199] font-semibold">
            {reading_time} min read
          </span>
          <button onClick={()=> handleBookmark(blog)}><IoBookmarksOutline></IoBookmarksOutline></button>
        </div>
      </div>

      <h2 className="text-5xl font-semibold">{title}</h2>

      <div className="hashtag">
        {hashtags.map((hash, idx) => (
          <span
            key={idx}
            className="text-[#11111199] mr-2 my-4 inline-block">
            <a href="">#{hash} </a>
          </span>
        ))}
      </div>

      <button onClick={()=> handleReadig(reading_time, id)} className="text-[#6047EC] mb-20 inline-block font-semibold">Mark as read</button>
    </>
  );
};

Blog.propTypes = {
  blog: MyProps.object.isRequired,
  handleBookmark: MyProps.func.isRequired,
  handleReadig: MyProps.func.isRequired,
};
export default Blog;
