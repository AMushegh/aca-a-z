// default parameter
function getSum(a = 0, b = 0) {
  // this syntax of default parameters is ES6 feature
  return a + b;
}

// default parameters without ES6 syntax
function getSumV2(a, b) {
  a = a !== undefined ? a : 79;
  b = b !== undefined ? b : 78;

  return a + b;
}

function myMathMax() {
  let args = Array.from(arguments);
  let max = args[0];
  args.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });

  return max;
}

// arguments pseudo array have only regular functions
// accessing arguments inside arrow function will cause an error

const result = myMathMax(1, 2, 100, 3, 4, 7);
console.log(result);
