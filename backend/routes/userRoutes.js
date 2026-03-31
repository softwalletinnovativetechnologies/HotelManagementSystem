const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// ==============================
// ✅ GET ALL USERS (ADMIN)
// ==============================
router.get("/", protect, adminOnly, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ==============================
// ✅ GET PROFILE (LOGGED USER)
// ==============================
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

console.log("User Routes file Running ✅");

module.exports = router;
