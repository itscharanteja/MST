const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017/";

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("weather_db");
    const collection = database.collection("play_tennis");

    // Insert multiple documents
    const data = [
      {
        Outlook: "Sunny",
        Temperature: "Hot",
        Humidity: "High",
        Windy: false,
        PlayTennis: "No",
      },
      {
        Outlook: "Sunny",
        Temperature: "Hot",
        Humidity: "High",
        Windy: true,
        PlayTennis: "No",
      },
      {
        Outlook: "Overcast",
        Temperature: "Hot",
        Humidity: "High",
        Windy: false,
        PlayTennis: "Yes",
      },
      {
        Outlook: "Rainy",
        Temperature: "Mild",
        Humidity: "High",
        Windy: false,
        PlayTennis: "Yes",
      },
      {
        Outlook: "Rainy",
        Temperature: "Cool",
        Humidity: "Normal",
        Windy: false,
        PlayTennis: "Yes",
      },
    ];

    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documents were inserted`);

    // Find all documents
    const docs = await collection.find().toArray();
    console.log(docs);

    // Find one document
    const doc = await collection.findOne({ Outlook: "Sunny" });
    console.log(doc);

    // Sort documents by Temperature in ascending order
    const sortedDocs = await collection
      .find()
      .sort({ Temperature: 1 })
      .toArray();
    console.log(sortedDocs);

    // Limit the number of documents returned to 5
    const limitedDocs = await collection.find().limit(5).toArray();
    console.log(limitedDocs);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
