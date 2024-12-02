/* eslint-disable react/prop-types */
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, coffees, setCoffees }) => {

  // handleDelete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/coffees/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoffees(coffees.filter((coffee) => coffee._id !== id));
      });
  };

  const { _id: id, name, chef, price, photo } = coffee;
  return (
    <div className="bg-[#f5f4f1] flex sm:flex-row flex-col p-8 gap-5 items-center rounded-md">
      <div>
        <img src={photo} alt="coffee" />
      </div>
      <div>
        <p>
          <span className="font-semibold">Name: </span> {name}
        </p>
        <p>
          <span className="font-semibold">Chef: </span> {chef}
        </p>
        <p>
          <span className="font-semibold">Price: </span> {price}
        </p>
      </div>

      <div className="flex-1 flex sm:flex-col items-end justify-center gap-3 text-right">
        <button className="btn p-3 bg-[#D2B48C] hover:bg-[#b8986f] text-white">
          <FaEye size={22}></FaEye>{" "}
        </button>

        <Link to={`/update/${id}`}>
          <button className="btn p-3 bg-[#3C393B] hover:bg-[#292728] text-white">
            <FaPen size={20}></FaPen>{" "}
          </button>
        </Link>

        <button
          onClick={() => handleDelete(id)}
          className="btn p-3 bg-[#EA4744] hover:bg-[#bb3836] text-white"
        >
          <FaTrash size={20}></FaTrash>{" "}
        </button>
      </div>
    </div>
  );
};

export default Coffee;
