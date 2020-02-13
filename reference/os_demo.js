//OPerating system module
const os = require("os");
//get the patform

console.log(os.platform());
//CPU architecture

console.log(os.arch());
//CPU core information
console.log(os.cpus());
//free memory
console.log(os.freemem());

//total memory
console.log(os.totalmem());
