const express = require("express");

const app = express();
const productRouter = require("./api/routes/product");
// app.use((req, res, next) => {
//   res.status(200).json({ msg: "this is simple server" });
// });
app.use("/product", productRouter);

module.exports = app;
