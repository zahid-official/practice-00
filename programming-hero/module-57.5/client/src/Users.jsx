import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
import { Link,  } from "react-router-dom";

const Users = () => {

  // tanstack
  const {data: dbData, isPending, isError, error} = useQuery({
    queryKey: ['user'],
    queryFn: async() => {
      const res = await fetch('http://localhost:5000/users');
      return res.json();
    }
  })

  if(isPending){
    return <span>Loading...</span>
  }

  if(isError){
    return <p>{error.message}</p>
  }


  // const [dbData, setDbData] = useState(data);

  // handleDelete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // const remain = dbData.filter((item) => item._id !== id);
        // setDbData(remain);
      });
  };

  return (
    <div className="p-8 text-xl font-bold space-y-9">
      <h1>Total Users: {dbData.length}</h1>
      {dbData.map((user) => (
        <p key={user._id}>
          {user.name} || {user.email}
          <Link to={`/update/${user._id}`}>
            <button className="btn btn-info mx-6">Update</button>
          </Link>
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
