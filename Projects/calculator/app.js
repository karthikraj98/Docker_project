const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"), err => {
        if (err) {
            console.error("Error sending index.html:", err);
            res.status(500).send("Error loading page");
        }
    });
});

app.listen(PORT, () => console.log(`🧮 Calculator running on port ${PORT}`));
