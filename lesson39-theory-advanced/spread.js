let arr = [1, 2, 4, 5, 100, 1];

let copy = [...arr];
console.log(copy);

let obj = { name: "mushegh" };
let objCopy = { ...obj };

console.log(objCopy === obj);
console.log(objCopy, obj);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];

let aNor = [...a1, ...a2];

console.log(aNor);

let nameObj = { name: "mushegh" };
let surNameObj = { name: "andrasyan" };
let personObj = { ...nameObj, ...surNameObj };
console.log(personObj);
