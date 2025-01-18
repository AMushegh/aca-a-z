let numbers = [1, 3, 3, 1, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    numbers[i] **= 2;
  } else {
    numbers[i] = Math.sqrt(numbers[i]);
  }

  sum += numbers[i];
}

console.log(sum.toFixed(2));
