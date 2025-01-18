// handling req/res in node requires efforts from the developers
//Also , if you want to handle the routes, you need to write a if-esle ladder
// All this can be done in node , but it requires effort
// for making it easy framework like Express comes into the picture.

//What is Express.js
// it is a web application framework for node.js
// it provides various features that make web app development fast and easy
// it provide an easy way to create we server , render html pages , handle req/res etc.

// if we want to convert a object into  a string  => JSON.stringy()
// if we want to convert a string into a object => JSON.parse()

const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  let product = {
    id: 1,
    name: "mobile",
    price: 5000,
  };
  //   res.send("<h2>home page</h2>");
  res.send(JSON.stringify(product));
});

app.listen(port, "localhost", () => {
  console.log("express server started at " + port);
});
