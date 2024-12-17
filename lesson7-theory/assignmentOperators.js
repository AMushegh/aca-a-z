// combination of operators and assignment
let a = 10;

// a = a + 5;
a += 5;
console.log(a);

a -= 8;
console.log(a);

a *= 10;
console.log(a);

// what returns assignment?
let b = 10;
console.log((b = 20)); // 20
console.log((b += 10), "b"); // 30
