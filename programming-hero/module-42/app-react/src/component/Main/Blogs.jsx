import { useEffect, useState } from "react";
import Blog from "./Blog";
import BookmarkProp from 'prop-types';

const Blogs = ({handleBookmark, handleReadig}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="p-8 bg-[#f3f3f3] lg:w-2/3 rounded-xl">
      {blogs.map((item, idx) => (
        <Blog key={idx} blog={item} handleBookmark={handleBookmark} handleReadig={handleReadig}></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
    handleBookmark: BookmarkProp.func.isRequired,
    handleReadig: BookmarkProp.func.isRequired,
}
export default Blogs;
