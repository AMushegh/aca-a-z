let array = [1, 3, 4, 63, 23, 5, 4, 23, 645, 23, 5];
let element = -1;

// find element/s in array and return them in new array
let result = [];
for (let i = 0; i < array.length; i++) {
  if (element === array[i]) {
    result.push(array[i]);
  }
}
console.log("1: ", result);

// if given element exists in the given array log true, and log false otherwise
let isExists = false;
for (let i = 0; i < array.length; i++) {
  if (element === array[i]) {
    isExists = true;
    break;
  }
}
console.log("2: ", isExists);

// find the index of the element in the array,
// if element appears more then one time, output should be the index of the first appearance
// if element does not exist in the array log -1
let finalIndex = -1;
for (let i = 0; i < array.length; i++) {
  if (element === array[i]) {
    finalIndex = i;
    break;
  }
}
console.log("3: ", finalIndex);
