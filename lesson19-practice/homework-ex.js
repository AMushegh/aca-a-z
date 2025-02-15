function getFibonacciValue(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  let current = 1;
  let prev = 1;

  for (let i = 2; i < n; ++i) {
    let nextValue = current + prev;
    prev = current;
    current = nextValue;
  }

  return current;
}

console.log(
  getFibonacciValue(1),
  getFibonacciValue(2),
  getFibonacciValue(3),
  getFibonacciValue(4),
  getFibonacciValue(5),
  getFibonacciValue(6),
  getFibonacciValue(7),
  getFibonacciValue(8),
  getFibonacciValue(9)
);
// 1, 1, 2, 3, 5, 8, 13, .....
// 0, 1, 1, 2, 3, 5, 8,

// ex-2 function

function getFactorial(n) {
  let res = 1;

  for (let i = n; i > 0; i--) {
    res *= i;
  }

  return res;
}

console.log(getFactorial(5));
