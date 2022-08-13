const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://jiuyouzhixia:hP8E4U5BW6mSXGBY@cluster0.nvecimf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const database = client.db("fruitsDB");
    const fruits = database.collection("fruits");

    const docs = [
      {
        name: "Apple",
        score: 8,
        review: "great",
      },
      {
        name: "orange",
        score: 6,
        review: "ok",
      },
      {
        name: "banada",
        score: 9,
        review: "bravo",
      }
    ];

    // // insert
    // const options = {ordered:true};

    // const result = await fruits.insertMany(docs, options);
    //     console.log(`${result.insertedCount} documents were inserted`);

    // find
    const options = {
      projection: { name: 1, review: 1, _id: 0 },
    };
    const fruit = fruits.find({}, options);
    await fruit.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
