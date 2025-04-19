let obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: {},
  },
  u: null,
  h: [1, 2, 3],
};

function deepCopy(obj) {
  const isArray = Array.isArray(obj);
  let target = isArray ? [] : {};

  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      target[key] = deepCopy(obj[key]);
    } else {
      target[key] = obj[key];
    }
  }

  return target;
}

const copy = deepCopy(obj);

console.log(copy === obj);
console.log(copy.c === obj.c);
console.log(copy.h === obj.h);
