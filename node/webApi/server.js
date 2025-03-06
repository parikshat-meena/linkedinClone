const http = require("http");
const app = require("./app");
require("dotenv").config();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME;

// const server = http.createServer((req, res) => {
//   res.end("<h1>server</h1>");
// });

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log("server started at http://" + hostname + ":" + port);
});
