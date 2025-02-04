let car = {
  doorOpened: false,
  //   toggleDoors: function () {
  //     this.doorOpened = !this.doorOpened;
  //   },
  showThis() {
    console.log(this);
  },
};

let foo = car.showThis;
car.showThis();
foo();
