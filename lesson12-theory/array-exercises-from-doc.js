// ___ 1 ___
let a = ["a", "b", "c"];
let b = ["a", "b", "c", "d"];

let result = [];
for (let i = 0; i < a.length; i++) {
  const currentElement = a[i];
  let isExists = false;

  for (let j = 0; j < b.length; j++) {
    if (currentElement === b[j]) {
      isExists = true;
      break;
    }
  }

  if (isExists) {
    result.push(currentElement);
  }
}

console.log("1: ", result);

// ___ 2 ___
let array2 = [1, 4, -6, 23, -1, 0];
let sum2 = 0;
for (let i = 0; i < array2.length; i++) {
  if (array2[i] > 0) {
    sum2 += array2[i];
  }
}
console.log("2: ", sum2);

// ___ 3 ___
let array3 = ["1", "2", "13", "4", "645"];
let sum3 = 0;
for (let i = 0; i < array3.length; i++) {
  if (typeof array3[i] === "number") {
    sum3 += array3[i];
  }
}
console.log("3: ", sum3);

// ___ 7 ___
let array4 = [3, 5, 223, 54, 1, 6, 3, 78, 8, 4];
let n = 3267;

let arr = [];
for (let i = 0; i < Math.min(n, array4.length); i++) {
  arr.push(array4[i]);
}
console.log(arr);
