const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.post("/api/users", (req, res) => {
  const user = req.body;
  // Handle user registration logic here
  console.log("User registered:", user);
  res.json({ message: "Registration successful!", user });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
