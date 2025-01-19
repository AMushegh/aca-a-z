// Object
let person = {
  birthDate: "11.09.2000",
  isMarried: true,
  "a  b": "Test",
  name: "Mushegh",
  surname: "Andrasyan",
  education: ["school", "bachelor", "master", "phd"],
  address: {
    city: "Yerevan",
    street: "Shiraz",
    bld: "34",
  },
};

// get property, 2 methods . , [] ---> inner code is executable
const CURRENT_YEAR = 2025;
let birthYear = CURRENT_YEAR - person.age;
console.log(birthYear);

console.log(person.middleName);

// set property
// person.middleName = "Andranik";
// console.log(person);
person["middleName"] = "Andranik";
console.log(person.middleName);

// edit property
person.age = 26;
console.log(person.age);

// delete
delete person["a  b"];
console.log(person);
