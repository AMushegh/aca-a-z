class Pet {
  static test = 1;
  #privateTest = "private";

  isSleeping = false;
  energy = 10;

  constructor(name) {
    this.name = name;
  }

  sleep() {
    this.isSleeping = true;
    this.energy += 5;
  }

  wakeUp() {
    this.isSleeping = false;
  }
}

class Dog extends Pet {
  isCatchingCat = false;

  constructor(name, isSleepingOutsideOfHouse) {
    super(name);
    this.isSleepingOutsideOfHouse = isSleepingOutsideOfHouse;
  }

  sleep() {
    this.isSleeping = true;
    this.energy += 6;
  }

  catchACat() {
    this.isCatchingCat = true;
  }

  makeSound() {
    return "haf-haf";
  }
}

class Cat extends Pet {
  makeSound() {
    return "meow-meow";
  }
}

const dog = new Dog("Jeco", true);
const cat = new Cat("Cat", true);

console.log(dog.__proto__ === Dog.prototype);
console.log(Dog.prototype.__proto__ === Pet.prototype);

// console.log("dog energy -> ", dog.energy);
// console.log("cat energy -> ", cat.energy);
// console.log("dog sleeping");
// dog.sleep();
// console.log("cat sleeping");
// cat.sleep();
// console.log("dog energy -> ", dog.energy);
// console.log("cat energy -> ", cat.energy);

console.log(dog);
console.log(Cat.test);

// class can extend only from one class
// if both child and parent classes have constructor function child should call super() in its constructor
// if parent has constructor but child does not need constructor parent constructor will be called by default
// inheritance is being managed via prototypes (can be implemented from our side)
// static props are being extended
// private fields are not being extended
