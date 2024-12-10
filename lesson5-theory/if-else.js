let waitingTimeMinutes = 8;
let isBusArrived = false;

if (waitingTimeMinutes >= 15) {
  console.log("taxi");
} else if (isBusArrived) {
  console.log("bus");
} else {
  console.log("wait more");
}

// ----
// maybe you don't need "if-else" at all
let number = 427398;
let isEven = Number(number % 2 === 0);

// if (number % 2 === 0) {
//   isEven = 1;
// } else {
//   isEven = 0;
// }

// let, const has block visibility
if (5483) {
  var a = 734892;
  console.log(a, "here");
}

// console.log(a) throws an error if uncomment
