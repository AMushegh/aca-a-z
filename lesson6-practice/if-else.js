// exercise 3
// ____ v1 ____
// let number = 74;
// number = String(number);

// if (number.length === 2 && number[0] > number[1]) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// ____ v2 ____
// let number = 74;
// if (String(number).length === 2 && Math.trunc(number / 10) > number % 10) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// ____ v3 ____
// let number = 74;
// let lastDigit = number % 10;
// let firstDigit = (number - lastDigit) / 10; // or Math.trunc(number / 10) as Math trunc returns integral part of number
// if (String(number).length === 2 && firstDigit > lastDigit) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// ___ v4 ___
// let number = 74;
// if (String(number).length === 2) {
//   let lastDigit = number % 10;
//   let firstDigit = (number - lastDigit) / 10;

//   if (firstDigit > lastDigit) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// } else {
//   console.log("no");
// }
