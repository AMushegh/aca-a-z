// find the sum of the digits of number
let number = 12345;

let sum = 0;
while (number > 0) {
  let lastDigit = number % 10;
  number = (number - lastDigit) / 10;
  sum++;
}
// console.log(sum)

// find sum of 1---n
let sum2 = 0;
let n = 199;
for (let i = 1; i <= n; i++) {
  if (i % 2 === 1) {
    sum2 += i;
  }
}
console.log(sum2);

// exercise

let a = 3;
let b = 2;
a = a + b; // 5
b = a - b; // 3
a = a - b; // 2
