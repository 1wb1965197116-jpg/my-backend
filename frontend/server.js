const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend static files
app.use(express.static(path.join(__dirname, "frontend")));

// Simple backend route
app.get("/api/message", (req, res) => {
  res.send("Hello from Backend!");
});

// Catch-all route to frontend index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
