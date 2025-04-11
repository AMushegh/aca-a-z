function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

let a = factorial(5);
console.log(a);
// n! = n * n-1 * n-2 * .... * 1
// 5! = 5 * 4 * 3 * 2 * 1
