const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/rooms", roomRoutes);
app.use("/bookings", bookingRoutes);

// MongoDB Atlas Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("DB Error ❌:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// Server
app.listen(5000, () => console.log("Server running on port 5000 🔥"));
