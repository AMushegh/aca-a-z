let names = ["Jack", "John", "Bob"];
//             0        1      2
// indexing starts from 0
console.log(names);

// How to create Array
// ___ 1 ___ literal symbols
let arr1 = [];
// ___ 2 ___ with constructor
let arr2 = new Array();
// ___ 3 ___ with Array method
let arr3 = Array();
// ___ 4 ___ with Array.from
let arr4 = Array.from("34290");

// type of Array
let numbers = [1, 2, NaN, 43890, -1];
console.log(typeof numbers); // returns ---> "object"
console.log(Array.isArray(numbers)); // returns ---> true | false (Boolean)

// set and get items
let scores = [12, 2, 5, 6, 20, 2, 8, 17];
// how to get item from array
console.log(scores[4]);
scores[4] = 19;
