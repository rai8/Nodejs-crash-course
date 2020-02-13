//this is for tehe path demo module
const path = require("path");
//Base file name // tells us the path to the base name and it can also give us the file name
console.log(__filename); // give us the path to the file name
console.log(path.basename(__filename)); //gives us the name of the file

// to get the directiry name
console.log(path.dirname(__filename));
//to get the extension name
console.log(path.extname(__filename));
//create path object
console.log(path.parse(__filename)); // because this is an object we can access any property

console.log(path.parse(__filename).base); // accessing the base property

//concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
