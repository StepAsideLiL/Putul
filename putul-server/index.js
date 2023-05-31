const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9snmkln.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Putul!");
});

app.listen(port, () => {
  console.log(`Putul app listening on port ${port}`);
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();

    const figures = client.db("putulDB").collection("figures");

    /**
     * GET: Get figures according to search query.
     */
    app.get("/v1/figures", async (req, res) => {
      const toyName = req.query.search || "";
      const page = parseInt(req.query.page) || 0;
      const limit = parseInt(req.query.limit) || 20;
      const skip = page * limit;

      const query = { toyName: { $regex: toyName, $options: "i" } };

      const result = await figures
        .find(query)
        .skip(skip)
        .limit(limit)
        .toArray();

      res.send(result);
    });

    /**
     * GET: Get figures according to loggedin user.
     */
    app.get("/v1/figures/user/:email", async (req, res) => {
      const sort = parseInt(req.query.sort) || 1;

      const email = req.params.email;

      const result = await figures
        .find({ sellerEmail: email })
        .sort({ price: sort })
        .toArray();

      res.send(result);
    });

    /**
     * GET: Get 3 figures sortend by rating.
     */
    app.get("/v1/figures/rating", async (req, res) => {
      const limit = parseInt(req.query.limit) || 3;

      const result = await figures
        .find()
        .sort({ rating: -1, subcategory: 1 })
        .limit(limit)
        .toArray();

      res.send(result);
    });

    /**
     * GET: Get one figure
     */
    app.get("/v1/figure/:id", async (req, res) => {
      const result = await figures.findOne({
        _id: new ObjectId(req.params.id),
      });

      res.send(result);
    });

    /**
     * GET: Get the total number of figures
     */
    app.get("/v1/total-figures", async (req, res) => {
      const totalFigures = await figures.countDocuments();

      res.send({ totalFigures });
    });

    /**
     * GET: Get the list of categories.
     */
    app.get("/v1/categories", async (req, res) => {
      const limit = parseInt(req.query.limit);

      const pipeline = [
        { $group: { _id: "$subcategory" } },
        { $project: { _id: 1, subcategory: "$_id" } },
        { $sort: { subcategory: 1 } },
      ];

      let result;
      if (limit) {
        result = await figures.aggregate(pipeline).limit(limit).toArray();
      } else {
        result = await figures.aggregate(pipeline).toArray();
      }

      res.send(result);
    });

    /**
     * GET: Get three figure of a certain category
     */
    app.get("/v1/category/:subcategory", async (req, res) => {
      const limit = parseInt(req.query.limit);

      const resultCount = await figures.countDocuments({
        subcategory: req.params.subcategory,
      });

      let result;
      if (resultCount >= 3) {
        result = await figures
          .find({
            subcategory: req.params.subcategory,
          })
          .limit(limit ? limit : resultCount)
          .toArray();
      } else {
        result = await figures
          .find({
            subcategory: req.params.subcategory,
          })
          .toArray();
      }

      res.send(result);
    });

    /**
     * POST: Post (or insert or add) a new figure data in the database.
     */
    app.post("/v1/figures", async (req, res) => {
      const figureData = req.body;

      const result = await figures.insertOne(figureData);

      res.send(result);
    });

    /**
     * PATCH: Update a figure of the logged in user.
     */
    app.patch("/v1/figures/:id", async (req, res) => {
      const figureId = req.params.id;
      const updateData = req.body;

      const filter = { _id: new ObjectId(figureId) };

      const updateDoc = {
        $set: {
          price: updateData.price,
          availableQuantity: updateData.availableQuantity,
          detailDescription: updateData.detailDescription,
        },
      };

      const options = { upsert: false };

      const result = await figures.updateOne(filter, updateDoc, options);

      res.send(result);
    });

    /**
     * DELETE: Delete a figure of the logged in user.
     */
    app.delete("/v1/figures/:id", async (req, res) => {
      const figureId = req.params.id;

      const result = await figures.deleteOne({ _id: new ObjectId(figureId) });

      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
