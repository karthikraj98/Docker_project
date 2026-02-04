const express = require("express");
const path = require("path");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3003;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// API: Server info
app.get("/api/info", (req, res) => {
  res.json({
    hostname: os.hostname(),
    platform: os.platform(),
    uptime: Math.floor(os.uptime() / 60) + " minutes",
    time: new Date().toLocaleString()
  });
});

// API: Random quote
app.get("/api/quote", (req, res) => {
  const quotes = [
    "Docker makes it work everywhere 🐳",
    "First make it work, then make it fast.",
    "In DevOps we trust.",
    "Code. Build. Ship. Repeat.",
    "If it works, don’t touch it."
  ];

  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

app.listen(PORT, () => {
  console.log(`🚀 App running on port ${PORT}`);
});
