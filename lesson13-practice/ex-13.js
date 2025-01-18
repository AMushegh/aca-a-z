function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
}

console.log("13 ================================");
let a = [1, 2, 3, 4, 5];
reverseArray(a);

console.log(a);
