const url = require("url");
const myUrl = new URL(
  "http://mywebsite.com:5999/hello.html?id=100&status=active"
);
//serialilzed url
console.log(myUrl.href);
console.log(myUrl.toString());
//to get the roor/ host domain
console.log(myUrl.host);

//to get the hostname.. tnis does not give you the port number
console.log(myUrl.hostname);
//pathname
console.log(myUrl.pathname);

//seraialize query
console.log(myUrl.search);

// getting the search parameter
console.log(myUrl.searchParams);

//adding a parameter
myUrl.searchParams.append("search engine", "yahoo");

console.log(myUrl.searchParams);

//Loop through the paramaters
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));
