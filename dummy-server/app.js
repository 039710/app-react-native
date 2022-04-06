const express = require("express");
const app = express();
const axios = require("axios");
const URL = "http://localhost:3333/users";
const port = 3332;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    res.status(200).json({
      isLoggedIn: true,
      user: {
        name: "admin",
        username: "admin",
      },
    });
  } else {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
});

app.listen(port, () => console.log(`server listening on port ${port}!`));
