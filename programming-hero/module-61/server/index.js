require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// middleware

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
// custom middleware
const verifyToken = (req, res, next) => {
  const tokenCookie = req?.cookies?.token;
  if (!tokenCookie) {
    return res.status(401).send({ message: "Unathorize Access" });
  }

  // verify token
  jwt.verify(tokenCookie, process.env.ACCESS_TOKEN, (error, decoded) => {
    if (error) {
      return res.status(401).send({ message: "Unathorize Access" });
    }
    req.accesToken = decoded;
    next();
  });
};

// MongoDb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.rjxsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

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
    // database collection
    const database = client.db("visasDB");
    const visasCollection = database.collection("visas");
    const applicationsCollection = database.collection("applications");

    // auth api for jwt token
    app.post("/jwt", async (req, res) => {
      const email = req.body;
      const token = jwt.sign(email, process.env.ACCESS_TOKEN, {
        expiresIn: "1hr",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
        })
        .send({ generateToken: true });
    });


    
    app.get("/removeToken", (req, res) => {
      res
        .clearCookie("token", {
          httpOnly: true,
          secure: false,
        })
        .send({ emptyToken: true });
    });

    // read applicatons data with jwt token
    app.get("/applications/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      const accesToken = req.accesToken.email;
      if (email !== accesToken) {
        return res.status(403).send({ message: "Forbidden Access" });
      }

      const query = { applicantEmail: email };
      const cursor = applicationsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // read data for home page latest section
    app.get("/", async (req, res) => {
      const cursor = visasCollection.find().sort({ _id: -1 }).limit(8);
      const result = await cursor.toArray();
      res.send(result);
    });

    // read
    app.get("/visa", async (req, res) => {
      const cursor = visasCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // readOne for visa details
    app.get("/visaDetails/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await visasCollection.findOne(query);
      res.send(result);
    });

    // read my visas data
    app.get("/visa/:email", async (req, res) => {
      const email = req.params.email;
      const query = { userEmail: email };
      const cursor = visasCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // readOne for my visas
    app.get("/visas/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await visasCollection.findOne(query);
      res.send(result);
    });

    // create
    app.post("/visa", async (req, res) => {
      const data = req.body;
      const result = await visasCollection.insertOne(data);
      res.send(result);
    });

    // create applications
    app.post("/applications", async (req, res) => {
      const data = req.body;
      const result = await applicationsCollection.insertOne(data);
      res.send(result);
    });

    // delete application
    app.delete("/applicationDetails/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await applicationsCollection.deleteOne(query);
      res.send(result);
    });

    // delete visa
    app.delete("/visaDetails/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await visasCollection.deleteOne(query);
      res.send(result);
    });

    // update myVisa
    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedData = {
        $set: {
          countryName: data.country,
          countryFlag: data.flag,
          visaType: data.type,
          processingTime: data.time,
          visaFee: data.fee,
          validatiy: data.valid,
          applicationMethod: data.applyMethod,
        },
      };
      const result = await visasCollection.updateOne(
        query,
        updatedData,
        options
      );
      res.send(result);
    });

    // filter visas
    app.get("/filters/:visaType", async (req, res) => {
      const typeOfVisa = req.params.visaType;
      const query = { visaType: typeOfVisa };
      const cursor = visasCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // search applications
    app.get("/search", async (req, res) => {
      const { searchQuery } = req.query;

      let option = {};
      if (searchQuery) {
        option = { countryName: { $regex: searchQuery, $options: "i" } };
        const result = await applicationsCollection.find(option).toArray();
        res.send(result);
      }
    });
  } finally {
  }
}
run().catch(console.log);

app.listen(port, () => {
  console.log(`Server Running on...: ${port}`);
});
