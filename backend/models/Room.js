const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  image: String,
  maxGuests: Number,
});

module.exports = mongoose.model("Room", roomSchema);
