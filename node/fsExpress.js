const express = require("express");
require("dotenv").config();
const fs = require("fs");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  const content = fs.readFileSync("index.html");
  res.setHeader("content-type", "text/html");
  //   console.log(content, "content");
  //   res.send(content);
  res.end(content);
});

app.get("/about", (req, res) => {
  res.send("<h2>About page</h2>");
});

app.listen(port, () => {
  console.log("express server started at " + port);
});
