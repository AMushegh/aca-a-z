// JSON -- javascript object notation

let jsonSample = "[{}]";

// create object from JSON
let objectFromJson = JSON.parse(jsonSample);

console.log(objectFromJson);

let address = {
  city: "Yerevan",
  street: "Shiraz",

  method: () => {},
};

let jsonFromObject = JSON.stringify(address);
console.log(jsonFromObject);

// example

let a = { a: 1, b: 2, c: [] };
let b = JSON.parse(JSON.stringify(a));
console.log(b.c === a.c);
