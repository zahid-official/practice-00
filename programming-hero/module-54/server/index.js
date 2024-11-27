const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const users = [
  { id: 1, name: "Fahim", email: "fahim@gmail.com" },
  { id: 2, name: "Rahim", email: "rahim@gmail.com" },
  { id: 3, name: "Mahin", email: "mahin@gmail.com" },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Data from Server");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
});

app.listen(port, () => {
  console.log(`Port running on: ${port}`);
});
