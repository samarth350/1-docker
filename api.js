const express = require("express");
const app = express();

console.log("🔥 NEW CODE RUNNING 🔥");

app.get("/", (req, res) => {
    res.send("Home");
});

// basic API route
app.get("/api/test", (req, res) => {
    res.json({
        message: "API working successfully",
        status: true,
        data: {
            name: "Samarth",
            role: "Software Engineer"
        }
    });
});


// server start
app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});