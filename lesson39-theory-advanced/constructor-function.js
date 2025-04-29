function Car(b, m, y) {
  this.brand = b;
  this.model = m;
  this.year = y;
  this.isTurnedOn = false;
}

Car.prototype.turnOn = function () {
  this.isTurnedOn = true;
};

function CarV2(b, m, y) {
  return {
    brand: b,
    model: m,
    year: y,
    isTurnedOn: false,
  };
}

let camry = new Car("toyota", "camry", 2025);
let forester = CarV2("subaru", "Forester", 2005);

console.log(camry);
camry.turnOn();
console.log(camry);
