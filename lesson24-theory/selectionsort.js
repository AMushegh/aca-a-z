function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(array, type) {
  // type-> 'asc' | 'desc'
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(array, minIndex, i);
    }
  }
}
let a = [7, -10, 9, 0, 11, 32, 5, 97];
selectionSort(a);
console.log(a);
