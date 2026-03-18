const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  roomId: String,
  userName: String,
  checkIn: Date,
  checkOut: Date,
});

module.exports = mongoose.model("Booking", bookingSchema);
