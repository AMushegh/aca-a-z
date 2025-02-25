// let group = array.reduce((acc, el) => {
//   if (el % 2 === 0) {
//     if (!acc["even"]) {
//       acc["even"] = [];
//     }

//     acc.even.push(el);
//   } else {
//     if (!acc["odd"]) {
//       acc["odd"] = [];
//     }

//     acc.odd.push(el);
//   }

//   return acc;
// }, {});

// let mapedValuesWithReduce = array.reduce((acc, el) => {
//   acc.push(el * 3);
//   return acc;
// }, []);

// let sum2 = array.reduce((acc, el) => {
//   console.log(acc, el);
//   return acc + el;
// }, undefined);
// console.log(sum);
// // {
// //   even: [2, 4];
// //   odd: [1, 3, 5];
// // }
let array = [1, 2, 3, 4, 5];

function myReduce(arr, cb, initialValue = "likhjgvfczdfghjkgfdsfsghjkbtyej") {
  let hasInitValue = initialValue !== "likhjgvfczdfghjkgfdsfsghjkbtyej";
  let startIndex = hasInitValue ? 0 : 1;
  let temp = hasInitValue ? initialValue : arr[0];

  for (let i = startIndex; i < arr.length; i++) {
    temp = cb(temp, arr[i], i, arr);
  }
  return temp;
}

let sum = myReduce(
  array,
  (acc, el) => {
    return acc + el;
  },
  0
);
console.log({ sum });
