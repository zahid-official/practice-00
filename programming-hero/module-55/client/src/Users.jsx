import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const data = useLoaderData();
  const [dbData, setDbData] = useState(data);

  // handleDelete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remain = dbData.filter(item => item._id !== id);
        setDbData(remain);
      });
  };

  return (
    <div className="p-8 text-xl font-bold space-y-9">
      <h1>Total Users: {dbData.length}</h1>
      {dbData.map((user) => (
        <p key={user._id}>
          {user.name} || {user.email}
          <button
            onClick={() => handleDelete(user._id)}
            className="btn btn-error ml-5  text-white font-bold"
          >
            X
          </button>
        </p>
      ))}
    </div>
  );
};

export default Users;
