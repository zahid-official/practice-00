const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Connected Successfully");
});

// MongoDB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0kznv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const database = client.db("coffeeDB");
    const coffeeCollection = database.collection("coffees");

    // create
    app.post("/coffees", async (req, res) => {
      const coffee = req.body;
      const result = await coffeeCollection.insertOne(coffee);
      res.send(result);
    });

    // read
    app.get("/coffees", async (req, res) => {
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // delete
    app.delete("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const qurey = { _id: new ObjectId(`${id}`) };
      const result = await coffeeCollection.deleteOne(qurey);
      res.send(result);
    });

    // update
    app.get("/update/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(`${id}`) };
      const result = await coffeeCollection.findOne(filter);
      res.send(result);
    });

    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      const updatingData = req.body;
      const filter = { _id: new ObjectId(`${id}`) };
      const options = { upsert: true };
      const updatedCoffe = {
        $set: {
          name: updatingData.name,
          chef: updatingData.chef,
          price: updatingData.price,
          taste: updatingData.taste,
          category: updatingData.category,
          details: updatingData.details,
          photo: updatingData.photo,
        },
      };

      const result = await coffeeCollection.updateOne(filter, updatedCoffe, options);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Port Connected on ${port}`);
});
