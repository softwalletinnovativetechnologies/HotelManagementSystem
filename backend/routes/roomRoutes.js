const express = require("express");
const router = express.Router();
const Room = require("../models/Room");

router.post("/add-room", async (req, res) => {
  const room = new Room(req.body);
  await room.save();
  res.send("Room Added");
});

router.get("/rooms", async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

module.exports = router;
