function foo() {
  const a = 1;
  a = 2;
}

let a = [1, 2, 3, 4, 5];

const [arajin, ...rest] = [...a, 6];

console.log(JSON.stringify(rest));
