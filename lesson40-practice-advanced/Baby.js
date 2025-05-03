function Baby(name, age, toy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = toy;
}

Baby.prototype.play = function () {
  console.log("Playing with " + this.favoriteToy);
};

let alice = new Baby("Alice", 1, "doll");
let tom = new Baby("Tom", 2, "car");

alice.play();
tom.play();
