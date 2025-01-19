Object.prototype.test = "__test__";

let person = {
  name: "Mushegh",
  surname: "Andrasyan",
};

console.log("name" in person);
console.log("test" in person);
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("test"));
