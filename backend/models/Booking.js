const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
    checkIn: Date,
    checkOut: Date,
    adults: Number,
    children: Number,
    totalAmount: Number,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Booking", bookingSchema);
