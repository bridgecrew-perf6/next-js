import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://vjba2405:Balaji_2405@cluster0.gqgfw.mongodb.net/meetups?retryWrites=true&w=majority",
      { useUnifiedTopology: true }
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    //we are setting a new status code

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
