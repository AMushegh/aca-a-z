// callback

let addTwo = function (x) {
  return x + 2;
};
let addFive = function (x) {
  return x + 2;
};

let array = [1, 2, 3];

function foo(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let a = callback(array[i]);
    console.log(a);
  }
}

foo(array, addTwo);
