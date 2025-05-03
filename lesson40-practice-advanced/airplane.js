const Airplane = {
  init(name) {
    this.name = name;
    this.isFlying = false;
  },

  takeOff() {
    this.isFlying = true;
  },

  land() {
    this.isFlying = false;
  },
};

Airplane.init("A320");
Airplane.takeOff();
console.log(Airplane.isFlying);
Airplane.land();
console.log(Airplane.isFlying);
