import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = {name, email};

    fetch('http://localhost:3000/users', {
      method: 'post',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    .then(res => res.json())
    .then(data => setUser([...user], data))
    form.reset();
  }

  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => setUser(data))
  } ,[])

  return (
    <>
      <h1 className="text-3xl font-bold underline">User Management System</h1>
      <p>Total Users: {user.length}</p>

      <form onSubmit={handleSubmit}>
        <h2>Add User Form</h2>
        <input type="text" name="name" placeholder="name" /><br /><br />
        <input type="email" name="email" placeholder="email" /><br /><br />
        <input type="submit" value="Add User" />
      </form>

      <div>
        {user.map(item => <p key={item.id}> {item.id}. {item.name} || {item.email} </p>)}
      </div>
    </>
  );
}

export default App;
