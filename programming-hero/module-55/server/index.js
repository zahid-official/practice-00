const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//mongodb: id:maileducational1 || pass:LVzl8LVQ5zQDPA06
const uri =
  "mongodb+srv://maileducational1:LVzl8LVQ5zQDPA06@cluster0.0kznv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("usersDB");
    const usersList = database.collection("users");

    // Create Data in DB
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersList.insertOne(user);
      res.send(result);
    });

    // read DB Data
    app.get("/users", async (req, res) => {
      const cursor = usersList.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Delete Data from DB
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const qurey = { _id: new ObjectId(id) };
      const result = await usersList.deleteOne(qurey);
      res.send(result);
    });

    //Update Data of DB

    //read single data
    app.get("/update/:id", async (req, res) => {
      const id = req.params.id;
      const qurey = { _id: new ObjectId(id) };
      const result = await usersList.findOne(qurey);
      res.send(result);
    });

    // Put Data to DB
    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      console.log(id, user);

      const qurey = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateUser = {
        $set: {
          name: user.name,
          email: user.email,
        },
      };

      const result = await usersList.updateOne(qurey, updateUser, options);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);

app.get("/", (req, res) => {
  res.send("Server Conected");
});

app.listen(port, () => {
  console.log(`Conecting on: ${port}`);
});
