let car = {
  brand: "toyota",
  model: "camry",
  year: 2025,
  engineStarted: false,
  lightsOn: false,
  doorOpened: false,

  toggleDoors: function () {
    this.doorOpened = !this.doorOpened;
  },

  turnOnEngine() {
    this.engineStarted = true;
  },

  turnOffEngine() {
    this.engineStarted = false;
  },
};

let car2 = car;
car = 1;

car2.toggleDoors();
console.log(car);
console.log(car2);

// console.log(car.doorOpened);
// console.log(car.engineStarted);

// car.toggleDoors();
// car.turnOnEngine();

// console.log(car.doorOpened);
// console.log(car.engineStarted);

// car.turnOffEngine();
// car.toggleDoors();

// console.log(car.doorOpened);
// console.log(car.engineStarted);
