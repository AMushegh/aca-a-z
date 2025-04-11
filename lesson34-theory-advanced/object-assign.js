let a = { name: "test", surname: "dajl", address: {} };

// Object.defineProperty(a, "name", { enumerable: false });

let b = {};
Object.assign(b, a);

console.log(b);
console.log(b.address === a.address);
