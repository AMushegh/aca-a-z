// 1
function getAverage(numberArr) {
  let sum = 0;

  for (const number of numberArr) {
    sum += number;
  }

  return sum / numberArr.length;
}

//2
function letterCount(text, symbol) {
  const textArr = text.split("");

  let count = 0;
  for (const element of textArr) {
    if (element.toLowerCase() === symbol.toLowerCase()) {
      count++;
    }
  }

  return count;
}

//3
function mergeArrays(arr1, arr2) {
  const res = [];

  for (const element of arr1) {
    res.push(element);
  }
  for (const element of arr2) {
    res.push(element);
  }
  return res;
}

function mapToObjects(names) {
  const res = [];

  for (const element of names) {
    res.push({ name: element });
  }

  return res;
}

function processArray(numbers, cb) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(cb(numbers[i]));
  }
  return result;
}

let res1 = getAverage([1, 2, 6]);
let res2 = letterCount("Connect", "c");
let res3 = mergeArrays([1, 3, 5], [5, 7, 9]);
let res4 = mapToObjects(["Ani", "Aram", "Hayk"]);
let res10 = processArray([1, 2, 3], (a) => a + 5);

console.log({ res1, res2, res3, res4, res10 });
