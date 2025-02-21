let arr = [1, 2, 3, 4, 5];

function myMap(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr));
  }
  return result;
}

let mappedArray = myMap(arr, (el, i) => {
  if (i <= 2) {
    return el * 3;
  }
});

console.log(arr, mappedArray);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let names = ["a", "b", "c"];
console.log(names.map((name) => ({ name: name })));
