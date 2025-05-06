// class === Constructor Functions
// classes are ES6 feature
// classes are syntax sugar

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

class Person {
  nationality = "ARM";

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// differences
// 1. cannot be called without new
// 2. classes are not hoisted
// 3. classes methods are being directly added on class prototype
// 4. class methods are being written on prototype with {enumerable: false}

const p = new Person("Mushegh", 25);

console.log(p);

// constructor
// we should use constructor if we want to pass data from outside fe new Test(111)

// static properties --> car.js
// static methods are adding properties to class/constructor

// private fields --> Laptop.js
// private fields cannot be used outside the class

// get, set --> car.js
// via get and set can be created getter and setter properties both on instance props and on static props
