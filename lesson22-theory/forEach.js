let scores = [1, 2, 3, 4, 5, 6];

let sumOfEvenIdx = 0;
scores.forEach((score) => (sumOfEvenIdx += score));

console.log(sumOfEvenIdx);
// function myForEach(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(array[i], i, array);
//   }
// }
