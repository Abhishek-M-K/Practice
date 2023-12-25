const fs = require("fs");

/* reading the file
fs.readFile("demo.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
*/

/* writing the file
fs.writeFile("demo.txt", "hello world, the first program", () => {
  console.log("File was over-written");
});

if we enter a path of file which does not exists then it will simply create the file at the given path

*/

/*directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  console.log("File already exists, am deleting");
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
  });
}
*/

//deleting files

if (fs.existsSync("./assets/new.txt")) {
  fs.unlink("./assets/new.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File deleted");
  });
} else {
  console.log("File not found");
}
