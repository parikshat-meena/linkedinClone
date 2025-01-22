const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRouter = require("./api/routes/product");
const bodyParser = require("body-parser");

// app.use((req, res, next) => {
//   res.status(200).json({ msg: "this is simple server" });
// });

mongoose
  .connect("mongodb+srv://fbsroot:Pmeena%402512@cluster0.frtesud.mongodb.net/")
  .then(() => {
    console.log("mongoDB connected successfully");
  })
  .catch(() => {
    console.log("Failed to connect mongoDB");
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use("/product", productRouter);

module.exports = app;
