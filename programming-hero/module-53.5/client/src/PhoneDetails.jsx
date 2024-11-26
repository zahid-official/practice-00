import { useLoaderData } from "react-router-dom";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { img, name, price, description } = data || {};
  return (
    <div>
      <div className="card bg-base-100 max-w-lg mx-auto mt-24 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" className="h-[450px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>${price}</p>
          <p>{description}</p>
          <div className="card-actions mt-4">
            <button className="btn btn-success text-white text-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
