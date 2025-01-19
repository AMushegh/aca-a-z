let person = {
  age: 37,
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

const testtt = Object.keys(person);
console.log(testtt);

const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);
