const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

// Basic route
app.get("/", (req, res) => {
    res.send("🚀 Hello from Dockerized Node.js App!");
});

// Health check (useful for containers & load balancers)
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ App running on port ${PORT}`);
});
