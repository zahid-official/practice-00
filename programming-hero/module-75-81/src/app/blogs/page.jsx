import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-3xl">This is Blogs Page</h2>
      <p className="text-center mt-4 underline text-blue-400">
        <Link href={"/blogs/nestedBlog"}>View Nested Blog Page</Link>
      </p>
    </div>
  );
};

export default Blogs;
