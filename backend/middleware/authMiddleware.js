const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    console.log("HEADER:", authHeader); // debug

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("DECODED:", decoded); // debug

    req.user = decoded;

    next();
  } catch (err) {
    console.log("❌ TOKEN ERROR:", err.message);

    // ⚠️ IMPORTANT: yaha logout ya session expired mat kar
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only access ❌" });
  }
  next();
};

module.exports = { protect, adminOnly };
