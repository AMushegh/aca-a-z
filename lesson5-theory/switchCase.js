let coffeeType = "1";

let coffeeAmericano = 1;
let coffeeBruno = 2;
let coffeeEspresso = 3;
let coffeeCappuccino = 4;

switch (coffeeType) {
  case coffeeEspresso:
    console.log("1sugar 0.5coffee");
    break;
  case coffeeBruno:
  case coffeeCappuccino:
    console.log("1sugar 1milk 1coffee");
    break;
  case coffeeAmericano:
    console.log("1sugar 1coffee");
    break;
  default:
    console.log("no such coffee");
    break;
}
