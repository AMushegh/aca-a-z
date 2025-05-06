class Car {
  static #count = 0;
  static getMessage = function () {
    return "adwjkl";
  };

  constructor(year, model) {
    Car.#count = ++Car.#count;
    this._year = year;
    this.model = model;
  }

  get year() {
    return this._year;
  }

  static get count() {
    return Car.#count;
  }
  static set count(v) {}

  showInfo() {
    return `${this.model} ${this.year}`;
  }
}

const car = new Car(2025, "camry");
const car1 = new Car(2005, "330");
const car2 = new Car(2022, "corola");
const car3 = new Car(2010, "rav4");
const car4 = new Car(2010, "rav4");

console.log(Car.count);
console.log(Car.getMessage());
Car.count = 45;
console.log(Car.count);
