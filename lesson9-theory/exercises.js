// exercises 1
// let number = 2945;

// let firstDigit = Math.floor(number / 1000);
// let secondDigit = Math.floor(number / 100) % 10;

// let lastDigit = number % 10;
// let thirdDigit = ((number % 100) - lastDigit) / 10;

// if (firstDigit + secondDigit > thirdDigit + lastDigit) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// exercise 2
let number = 46727945686245;
let sumOfOdds = 0;
let sumOfEvens = 0;
const lastDigit = 21;

while (number) {
  const lastDigit = number % 10;
  number = (number - lastDigit) / 10;
  if (lastDigit % 2 === 0) {
    sumOfEvens += lastDigit;
  } else {
    sumOfOdds += lastDigit;
  }
}
console.log(lastDigit);
console.log(2 % 3);

console.log("sum of even digits: ", sumOfEvens);
console.log("sum of odd digits: ", sumOfOdds);
