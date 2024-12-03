import { useContext, useEffect } from "react";
import ContexAPI from "./ContexAPI";
import { FaTrash, FaPen } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const User = () => {
  // useContext
  const { coffeUser, setCoffeUser } = useContext(ContexAPI);

  // read coffeeUser from DB
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setCoffeUser(data));
  }, [setCoffeUser]);

  // handleDelete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setCoffeUser(coffeUser.filter((item) => item._id !== id));
          });
      }
    });
  };

  return (
    <div className="container mx-auto my-28">
      <h2 className="text-4xl font-semibold rancho text-center mb-8">
        Total User: {coffeUser?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Register At</th>
              <th>Login At</th>
              <th>Remove</th>
              <th>Edit Data</th>
            </tr>
          </thead>

          {/* body */}
          <tbody>
            {coffeUser?.map((item, idx) => (
              <tr key={item?._id} className="hover">
                <th>{idx + 1}</th>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.registrationTime}</td>
                <td>{item?.loginTime}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-transparent"
                  >
                    <FaTrash size={22} color="red"></FaTrash>
                  </button>
                </td>

                <td>
                  <Link to={`/updateUsers/${item._id}`}>
                    <button className="btn bg-transparent">
                      <FaPen size={22} color="green"></FaPen>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
