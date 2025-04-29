Array.prototype.myMap = function (cb) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }

  return res;
};

console.log([1, 2, 3, 4, 5, 6].myMap((el) => el * 2));
console.log([1, 2, 3, 4, 5, 6].map((el) => el * 2));
