"use client"

import Link from "next/link";

const Services = () => {
  return (
    <div>
      <h2 className="text-3xl text-center pt-20">Which Service you want?</h2>

      <div className="flex gap-10 justify-center my-28">
        {/* 1 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <Link href={"/services/1"}>
                <button className="btn btn-primary">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
            <Link href={"/services/2"}>
                <button className="btn btn-primary">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
            <Link href={"/services/3"}>
                <button className="btn btn-primary">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
