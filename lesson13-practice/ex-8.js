// create one big array including both arrays
// remove duplicates

let array1 = ["a", "b", "c", "d"];
let array2 = ["a", "b", "c"];

for (let i = 0; i < array2.length; i++) {
  array1.push(array2[i]);
}

let result = [];
// for (let i = 0; i < array1.length; i++) {
//   if (!result.includes(array1[i])) {
//     result.push(array1[i]);
//   }
// }

for (let i = 0; i < array1.length; i++) {
  if (array1.indexOf(array1[i]) === i) {
    result.push(array1[i]);
  }
}

console.log(result);
