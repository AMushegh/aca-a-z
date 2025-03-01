let array = [
  -100, -3, -1, 1, 1.003, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
  55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
  74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
  93, 94, 95, 96, 97, 98, 99, 100,
];

function binarySearch(arr, el) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(mid);
    if (arr[mid] === el) {
      return mid;
    } else if (arr[mid] < el) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function linearSearch(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    console.log("linear");

    if (arr[i] === el) {
      return i;
    }
  }

  return -1;
}

let res1 = linearSearch(array, 1.5);
let res2 = binarySearch([1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 5, 6], 5);

console.log({ res1, res2 });
//O(log2^n)
//O(n)
