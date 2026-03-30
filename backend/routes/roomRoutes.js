const express = require("express");
const router = express.Router();
const Room = require("../models/Room");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// ADD ROOM (ADMIN)
router.post("/", protect, adminOnly, async (req, res) => {
  const room = new Room(req.body);
  await room.save();
  res.json(room);
});

// UPDATE ROOM
router.put("/:id", protect, adminOnly, async (req, res) => {
  const updated = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// DELETE ROOM
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await Room.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted ✅" });
});
// ✅ GET ALL
router.get("/", async (req, res) => {
  try {
    const rooms = await Room.find().sort({ createdAt: -1 });
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ CREATE (ONLY ADMIN)
router.post("/", protect, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only ❌" });
    }

    const { name, price, image, description } = req.body;

    const room = new Room({
      name,
      price,
      image,
      description,
    });

    const savedRoom = await room.save();
    res.status(201).json(savedRoom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET SINGLE
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

// ✅ DELETE (ADMIN ONLY)
router.delete("/:id", protect, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only ❌" });
    }

    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: "Room deleted" });
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

module.exports = router;
