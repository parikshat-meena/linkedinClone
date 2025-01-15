// we can execute middleware when we want to execute some functionality on the http request,
// before it reaches the controller.
// middleware is a function which will get called
// the function has access to the request(req) and the response(res) objects
// the function uses "next()" to pass on the call to the next middleware

const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(logging); // this is the common middleware for logging info

app.get("/", showHomeInfo, (req, res) => {
  res.send("<h2>home page</h2>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About page</h2>");
});

app.listen(port, "localhost", () => {
  console.log("express server started at " + port);
});

function showHomeInfo(req, res, next) {
  console.log("home middleware called");
  next();
}

function logging(req, res, next) {
  console.log("we are logging middleware function", req.url);
  next();
}
