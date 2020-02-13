const detail = require("./person");
const Person = require("./class");
console.log(detail.name);
console.log(detail.age);
const person1 = new Person("Edwin", 26);
person1.greeting();
