const express = require("express");
const router = express.Router();
const Room = require("../models/Room");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// ✅ GET ALL ROOMS
router.get("/", async (req, res) => {
  try {
    const rooms = await Room.find().sort({ createdAt: -1 });
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET SINGLE ROOM
router.get("/:id", async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.json(room);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

// ✅ CREATE ROOM (ADMIN ONLY)
router.post("/", protect, adminOnly, async (req, res) => {
  try {
    const { name, price, capacity, image, description, amenities } = req.body;

    const room = new Room({
      name,
      price,
      capacity,
      image,
      description,
      amenities,
    });

    const savedRoom = await room.save();

    console.log("✅ SAVED:", savedRoom); // DEBUG

    res.status(201).json(savedRoom);
  } catch (err) {
    console.log("❌ ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ✅ UPDATE ROOM
router.put("/:id", protect, adminOnly, async (req, res) => {
  try {
    const updated = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE ROOM
router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted ✅" });
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

module.exports = router;
