// object destructure

let obj = {
  name: "Mushegh",
  surname: "Andrasyan",
  address: {
    city: "Yerevan",
    street: "Shiraz",
    building: "34",
  },
};

const {
  name: firstName,
  surname,
  address: { city, street },
  test,
} = obj;

console.log(firstName, surname, city, street);

// destructuring arrays

let arr = [1, 2, 3, 4, 5, 6];

let [, secondItem, third, , fifth] = arr;
console.log(secondItem, third, fifth);

let a = 4;
let b = 5;

[a, b] = [b, a];

console.log(a, b);
