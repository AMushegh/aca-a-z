function indexOfRecursive(arr, searchTarget) {
  if (arr.length === 0) {
    return -1;
  }

  if (arr[0] === searchTarget) {
    return 0;
  }

  const indexInRest = indexOfRecursive(arr.slice(1), searchTarget);

  return indexInRest === -1 ? -1 : indexInRest + 1;
}

let a = indexOfRecursive([1, 2, 3, 4], 1);
console.log(a);

function removeFirstElementFromArray(arr) {
  return arr.filter((_, index) => index !== 0);
}
