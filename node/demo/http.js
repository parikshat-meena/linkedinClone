const http = require("http");
require("dotenv").config();
const fs = require("fs");

// const hostName = "localHost";
// const port = 3001;

const hostName = process.env.HOSTNAME;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/html");
  //   res.end("<h2>Hello Node</h2>");
  // res.setHeader("content-type", "application/json");

  // res.end(JSON.stringify({ message: "Hello Node.js" }));

  if (req.url == "/" || req.url == "/home") {
    const content = fs.readFileSync("index.html");
    res.end(content);
  } else if (req.url == "/about") res.end("<h2>About Page</h2>");
  else if (req.url == "/contact") res.end("<h2>Contact Page</h2>");
  else res.end("<h2>404 - Page not found</h2>");
});

server.listen(port, hostName, () => {
  console.log(`server started at http://${hostName}:${port}`);
});
