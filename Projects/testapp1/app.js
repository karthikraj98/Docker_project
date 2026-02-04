const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Node.js app running inside Docker!",
    hostname: os.hostname(),
    time: new Date().toISOString()
  });
});

// Health check
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Random number API
app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 1000);
  res.json({ randomNumber });
});

// Start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
