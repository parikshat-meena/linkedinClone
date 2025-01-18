const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("<h2>home page</h2>");
});

app.listen(5001, () => {
  console.log("server started at 5001");
});

//express.static()
// we can serve contents using the express.static() middleware
// while setting up the middleware, we provide the path of folder (which contians the assets)
// static resources  are all those resources which you want to provide direct access to the users
// ex : - html , pdf , image, etc.
