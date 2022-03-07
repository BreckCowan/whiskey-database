const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
var request = require("request");

app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useUnifiedTopology: true });

const whiskeySchema = {
  name: String,
  summary: String,
  origin: String,
  distiller: String,
  proof: Number,
  color: String,
  mash_bill: Number,
  founded: Number,
};

const Whiskey = mongoose.model("Whiskey", whiskeySchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let newWhiskey = new Whiskey({
    name: req.body.name,
    summary: req.body.summary,
    origin: req.body.origin,
    distiller: req.body.origin,
    proof: req.body.proof,
    color: req.body.color,
    mash_bill: req.body.mash_bill,
    founder: req.body.founder,
  });
  newWhiskey.save();
  res.redirect("/");
});

async function main() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();

    await listDatabases(client);

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases: ");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}

// const notesSchema = {
//   title: String,
//   content: String,
// };

// const Note = mongoose.model("Note", notesSchema);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/", (req, res) => {
//   let newNote = new Note({
//     title: req.body.title,
//     content: req.body.content,
//   });
//   newNote.save();
//   res.redirect("/");
// });

app.listen(3000, () => {
  console.log("Server running on 3000");
});
