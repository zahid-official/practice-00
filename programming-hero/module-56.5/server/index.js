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
    // await client.connect();
    // coffee collection
    const database = client.db("coffeeDB");
    const coffeeCollection = database.collection("coffees");
    
    // user collection
    const userCollection = client.db('coffeeUsersDB').collection("coffeeUsers");

    // create
    app.post("/coffees", async (req, res) => {
      const coffee = req.body;
      const result = await coffeeCollection.insertOne(coffee);
      res.send(result);
    });

    // create users
    app.post('/users', async(req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    })

    // read
    app.get("/coffees", async(req, res) => {
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // read users
    app.get('/users', async(req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })

    // delete
    app.delete("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const qurey = { _id: new ObjectId(`${id}`) };
      const result = await coffeeCollection.deleteOne(qurey);
      res.send(result);
    });

    // delete user
    app.delete('/users/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(`${id}`)};
      const result = await userCollection.deleteOne(query);
      res.send(result);
    })

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

    // update user
    app.get('/updateUsers/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(`${id}`)};
      const result = await userCollection.findOne(query);
      res.send(result);
    })
    app.put('/updateUsers/:id', async(req, res) => {
      const id = req.params.id;
      const updatedData = req.body;
      const query = {_id: new ObjectId(`${id}`)};
      const options = { upsert: true };
      const updateUser = {
        $set: {
          name: updatedData.name,
          email: updatedData.email,
        }
      }
      const result = await userCollection.updateOne(query, updateUser, options);
      res.send(result);
    })

    // update existing Data
    app.patch('/updateUsers', async(req, res) => {
      const id = req.body.email;
      const query = {email:id}
      const loggedTime = {
        $set: {
          loginTime: req.body.loginTime,
        }
      }

      const result = await userCollection.updateOne(query, loggedTime);
      res.send(result);
    })

    
  } finally {
    
  }
}
run().catch(console.log);

app.listen(port, () => {
  console.log(`Port Connected on ${port}`);
});
