"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Blogs = () => {
    // useHooks
    const router = useRouter();

    const isUserLogged = true;
    // conditional rendering for private route
    const handlePrivate = ()=> {
        if(isUserLogged){
           router.push("/blogs/privateRouter");
        }
        else{
            router.push("/");
        }
    }

  return (
    <div>
      <h2 className="text-3xl">This is Blogs Page</h2>
      <p className="text-center mt-4 underline text-blue-400">
        <Link href={"/blogs/nestedBlog"}>View Nested Blog Page</Link><br /><br />

        <button type="button" className="btn btn-neutral" onClick={handlePrivate}>Private Route</button>
      </p>
    </div>
  );
};

export default Blogs;
