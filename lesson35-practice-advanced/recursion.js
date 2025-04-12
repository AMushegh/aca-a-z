function getRecursiveSum(n) {
  if (n === 1) {
    return 1;
  }

  return n + getRecursiveSum(n - 1);
}

function indexOfRecursive(arr, searchTarget, index = 0) {
  if (arr.length === 0) {
    return -1;
  }

  if (arr[0] === searchTarget) {
    return index;
  }

  return indexOfRecursive(
    removeFirstElementFromArray(arr),
    searchTarget,
    index + 1
  );
}

function removeFirstElementFromArray(arr) {
  return arr.filter((_, index) => index !== 0);
}

let b = [4];
let a = indexOfRecursive([1, 2, 3, 4, b], b);
console.log(a);

// 3
function findInnerNotArrayElementCount(arr) {
  let count = 0;

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      count += findInnerNotArrayElementCount(element);
    } else {
      count++;
    }
  });

  return count;
}

console.log(
  findInnerNotArrayElementCount([1, 2, [1], 3, [1, 2, 3, [1, 2, 3], 4]])
);

// 4
