//this is for the file system module
const path = require("path");
const fs = require("fs");

//creating a folder
/* fs.mkdir(path.join(__dirname, "/test"), {}, err => {
  if (err) throw err;
  console.log("Folder created successfully...");
}); */
//create and write a file
/* fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello there  ",

  err => {
    if (err) throw err;
    console.log("File written to ...");
    //append file
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      "I am  beginning to love Nodejs ",
      err => {
        if (err) throw err;
        console.log("File written to ...");
      }
    );
  }
); */

//reading the contents of the file
/* fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); */
//rename a file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  err => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
