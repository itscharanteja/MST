const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
const port = 3000;
const uri = "mongodb://localhost:27017/";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("fee_payment_db");
    const collection = database.collection("payments");

    const paymentData = {
      name: req.body.name,
      email: req.body.email,
      amount: req.body.amount,
      date: new Date(),
    };

    const result = await collection.insertOne(paymentData);
    console.log(`Payment inserted with id: ${result.insertedId}`);
    res.send("Payment successful!");
  } catch (err) {
    console.error(err);
    res.send("Error processing payment.");
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
