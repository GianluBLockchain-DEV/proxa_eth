const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files (like images, stylesheets, and scripts)
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "proxy_eth.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
