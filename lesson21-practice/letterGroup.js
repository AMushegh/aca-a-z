let letters = ["f", "r", "o", "g", "g", "y"];

let a = {};

for (let i = 0; i < letters.length; i++) {
  if (a[letters[i]]) {
    a[letters[i]].push(i);
  } else {
    a[letters[i]] = [i];
  }
}

console.log(a);
