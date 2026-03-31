const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Room = require("../models/Room");
const Booking = require("../models/Booking");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// ✅ ADMIN STATS API
router.get("/stats", protect, adminOnly, async (req, res) => {
  try {
    const users = await User.countDocuments();
    const rooms = await Room.countDocuments();
    const bookings = await Booking.countDocuments();

    res.json({
      users,
      rooms,
      bookings,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
