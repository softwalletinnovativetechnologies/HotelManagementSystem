const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Room", roomSchema);
