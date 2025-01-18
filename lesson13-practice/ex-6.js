let array = [1, 2, 3, 4];
let arrayResult = [];

for (let i = 0; i < array.length; i++) {
  let sum = 0;

  for (let j = i; j >= 0; j--) {
    sum += array[j];
  }

  arrayResult.push(sum);
}

console.log(arrayResult);
