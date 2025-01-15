const fs = require("fs");

// // // creating file with blocking (synchronous)
// const data = "first line in the text file by synchronous function";
// fs.writeFileSync("index.txt", data);
// console.log("file created successfully");

// // fetching data from the file with synchronous calling
// try {
//   const content = fs.readFileSync("index.txt", "utf-8");
//   console.log(content);
// } catch (error) {
//   if (error.code === "ENOENT") {
//     console.log("file not found");
//   } else throw error;
// }

// asynchronous calling  - non-blocking
// fs.readFile("index.txt", "utf-8", (err, data) => {
//   if (err) {
//     return console.log("error in file reading ");
//   }

//   createFile(data);
//   console.log("file reading completed");
// });

// const createFile = (fileData) => {
//   fs.writeFile("demo.txt", fileData, (err) => {
//     if (err) {
//       console.log("error in file creation with async function");
//       return;
//     }
//     console.log("file created successfully");
//   });
// };

// fs.appendFile(
//   "index.txt",
//   "\n This is the new line in the append function",
//   (err) => {
//     console.log("file updated ");
//   }
// );

// fs.unlink("index.txt", (err) => {
//   console.log("file deleted successfully");
// });

// fs.mkdir("node_modules", (err) => {
//   console.log("folder created");
//   if (!err) {
//     fs.writeFile(
//       "node_modules/index.json",
//       '{"email" : "xyz@gmail.com"}',
//       "utf-8",
//       (err) => {
//         console.log("json folder created");
//         if (!err) {
//           fs.readFile("node_modules/index.json", "utf-8", (err, data) => {
//             const fileData = JSON.parse(data);
//             console.log("file Data : ", fileData);
//           });
//         }
//       }
//     );
//   }
// });

// fs.rename("demo.txt", "index.txt", (err) => {
//   console.log("file renamed successfully");
// });

// fs.rename("node_modules", "newFolder", (err) => {
//   console.log("folder renamed ");
// });

// stream are used to read write data from the file in chunks
let count = 0;
const readstream = fs.createReadStream("index.txt", "utf-8");
const writestream = fs.createWriteStream("index4.txt", "utf-8");

// chunk is a small part of the big data
// readstream.on("data", (chunk) => {
//   count++;
//   console.log(chunk, "chunk ==================================>");
//   console.log(count, "count");
//   writestream.write(`count: ${count}  \n`);
// });

//benefits of stream
// 1. improves memory efficiency
// 2. faster response times,
// 3. better scalability for large data handling

// we can use pipe for controlled flow of stream

readstream.pipe(writestream);

writestream.on("finish", () => {
  console.log("data inserted successfully");
});
