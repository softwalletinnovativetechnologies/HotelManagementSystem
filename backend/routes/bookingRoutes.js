const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Room = require("../models/Room");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// ==============================
// ✅ CREATE BOOKING (USER)
// ==============================
router.post("/", protect, async (req, res) => {
  try {
    const { roomId, checkIn, checkOut, adults, children } = req.body;

    if (!roomId || !checkIn || !checkOut) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    const days =
      (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);

    if (days <= 0) {
      return res.status(400).json({ message: "Invalid dates" });
    }

    const totalAmount = days * room.price;

    const booking = new Booking({
      user: req.user.id,
      room: roomId,
      checkIn,
      checkOut,
      adults: adults || 1,
      children: children || 0,
      totalAmount,
      paymentStatus: "pending",
    });

    await booking.save();

    res.status(201).json({
      success: true,
      message: "Booking successful ✅",
      booking,
    });
  } catch (err) {
    console.log("BOOKING ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ==============================
// ✅ GET ALL BOOKINGS (ADMIN)
// ==============================
router.get("/", protect, adminOnly, async (req, res) => {
  try {
    const bookings = await Booking.find().populate("room").populate("user");

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found ❌" });
    }

    await booking.deleteOne();

    res.json({ message: "Booking deleted ✅" });
  } catch (err) {
    console.log("DELETE ERROR:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ USER BOOKINGS
router.get("/my", protect, async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id })
    .populate("room")
    .sort({ createdAt: -1 });

  res.json(bookings);
});

module.exports = router;
