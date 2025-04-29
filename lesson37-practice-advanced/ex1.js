const myMath = {};

Object.defineProperty(myMath, "PI", {
  value: 3.14159,
  configurable: false,
  enumerable: true,
  writable: false,
});

Object.defineProperty(myMath, "max", {
  value: function () {
    const args = Array.from(arguments);
    if (args.length === 0) {
      return -Infinity;
    }
    return args.reduce((acc, el) => (el > acc ? el : acc));
  },
  configurable: false,
  enumerable: false,
  writable: false,
});

const max = myMath.max(1, 3, 100, 5, 6);
console.log(max);
