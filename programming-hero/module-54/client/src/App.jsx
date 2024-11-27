import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => setUser(data))
  } ,[])

  return (
    <>
      <h1 className="text-3xl font-bold underline">User Management System</h1>
      <p>Total Users: {user.length}</p>
    </>
  );
}

export default App;
