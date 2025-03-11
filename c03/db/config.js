const mongoose = require("mongoose");

const URI = "";
// NOTE: Ne go prikacuvajte ova na GITHUB

async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log(err);
  }
}

// connect();

module.exports = connect;
