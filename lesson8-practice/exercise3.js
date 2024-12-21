let n = 7;

let sum = 0;
for (let i = 2; i <= n; ++i) {
  sum += i * (i - 1);
}
console.log(sum);
