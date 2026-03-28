const express = require("express");
const router = express.Router();
const Room = require("../models/Room");

// GET
router.get("/", async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

// POST
router.post("/", async (req, res) => {
  const room = new Room(req.body);
  await room.save();
  res.json(room);
});

module.exports = router;
