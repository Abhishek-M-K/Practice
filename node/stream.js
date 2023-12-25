// streams are used to start using the data before it gets fully loaded
const fs = require("fs");

const readStream = fs.createReadStream("./assets/demo2.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./assets/demo3.txt");

// readStream.on("data", (chunk) => {
//   console.log("...............new chunk");
//   //   console.log(chunk.toString());
//   console.log(chunk);
//   writeStream.write("Hello this is new line, please dont mind reading it !!!");
//   writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);
