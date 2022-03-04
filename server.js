const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
require("dotenv").config();
var request = require("request");

app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.MONGO_URI;



mongoose.connect(uri, { useUnifiedTopology: true });

const notesSchema = {
  title: String,
  content: String,
};

const Note = mongoose.model("Note", notesSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let newNote = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  newNote.save();
  res.redirect("/");
});

async function main() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    

    await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);




app.listen(3000, () => {
  console.log("Server running on 3000");
});
