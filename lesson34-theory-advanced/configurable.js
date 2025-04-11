let test = {};
Object.defineProperty(test, "PI", { value: 3.14 }); // creation
console.log(Object.getOwnPropertyDescriptor(test, "PI"));

delete test.PI;

console.log(test);
