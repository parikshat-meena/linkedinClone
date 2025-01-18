const path = require("path");

// console.log(__dirname);
// console.log(__filename);
console.log(path.basename(__dirname)); // Node
console.log(path.basename("c:/leaning/node/classes/pathModule.js")); // pathModule.js
console.log(path.dirname("c:/leaning/node/classes"));
console.log(path.extname("c:/leaning/node/classes/index.js"));
console.log(path.isAbsolute("learning/node"));
console.log(path.join(__dirname, "/demo"));
