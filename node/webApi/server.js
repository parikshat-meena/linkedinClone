const http = require("http");
const app = require("./app");
require("dotenv").config();
const port = 4500;
const hostname = "127.0.1";

// const server = http.createServer((req, res) => {
//   res.end("<h1>server</h1>");
// });

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log("server started at 4500");
});
