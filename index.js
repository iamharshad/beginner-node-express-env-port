const express = require("express");
const app = express();

app.get("/about-us", function (req, res) {
  res.send("About us");
});

app.get("/", function (req, res) {
  res.send("Hello World - Home");
});

app.listen(process.env.PORT || "8866");
