let a = [1, 2, 3, 4, 5];

a.reduce = () => {
  return "mushegh";
};

let b = [1, 2, 3, 4, 5];

// console.log(a.reduce((a, b) => a + b));
// console.log(b.reduce((a, b) => a + b));

Object.prototype.someMethod = function () {
  return "some method";
};

// console.log(a.someMethod());

"string".toUpperCase();
