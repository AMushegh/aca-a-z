// rest

let a = [1, 2, 3, 4, 5];

let [first, , third, ...rest] = a;

function myMax(a, ...rest) {
  console.log(rest);
  let max = rest[0];
  for (let i = 1; i < rest.length; i++) {
    if (rest[i] > max) {
      max = rest[i];
    }
  }

  return max;
}

myMax(1, 2, 3, 4, 5, 6, 7, 8);

//
let test = [1, 2, 3];
let [...restArrElements] = test;

console.log(restArrElements === test);
