const car = {
  turnedOn: false,
  brand: "Toyota",
  model: "Camry",

  turnOnEngine() {
    this.turnedOn = true;
  },

  turnOffEngine() {
    this.turnedOn = false;
  },

  getBrand() {
    return this.brand;
  },
};
// car.brand; throws an error
car.getBrand();
console.log(car.turnedOn);
car.turnOnEngine();
console.log(car.turnedOn);
car.turnOffEngine();
console.log(car.turnedOn);
