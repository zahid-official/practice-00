/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
  const { id, img, name, price, description } = phone || {};
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" className="h-[450px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>${price}</p>
          <p>{description}</p>
          <div className="card-actions mt-4">
            <Link to={`/phones/${id}`}>
              <button className="btn btn-success text-white text-lg">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phone;
