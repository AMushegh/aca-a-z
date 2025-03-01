function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let a = [7, -10, 9, 0, 11, 32, 5, 97];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("first");
    let swapCount = 0;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        swapCount++;
      }
    }

    if (swapCount === 0) {
      return;
    }
  }
}

bubbleSort(a);
console.log(a);
