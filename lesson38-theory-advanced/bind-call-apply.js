function logger(param1, param2) {
  return this.a + this.b + "" + param1 + param2;
}

let obj = {
  a: 1,
  b: 10,
};

// let result = logger.call(obj, "arman", "mushegh");
// let result = logger.apply(obj, ["arman", "mushegh"]);

let newFunction = logger.bind(obj);

console.log(newFunction);
