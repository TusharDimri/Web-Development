const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";
  
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('fruitsDB');
    const fruitsList = database.collection('fruitsList');

    // Query for a movie that has the title 'Back to the Future'
    const query = { name: 'Litchi' };
    const fruit = await fruitsList.findOne(query);

    console.log(fruit);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);