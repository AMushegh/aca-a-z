let n = 10;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

console.log("-".repeat(20));

for (let i = 0; i < 10; i++) {
  let row = "";
  for (let j = 0; j < 10 - i; j++) {
    row += "*";
  }
  console.log(row);
}

console.log("-".repeat(20));

for (let i = 0; i < 10; i++) {
  let row = "";
  for (let j = 0; j < 10; j++) {
    if (j < i) {
      row += " ";
    } else {
      row += "*";
    }
  }
  console.log(row);
}

console.log("-".repeat(20));

for (let i = 0; i < 20; i++) {
  let row = "";
  for (let j = 0; j < 20; j++) {
    if (j < 20 - 1 - i) {
      row += "  ";
    } else {
      row += "  *";
    }
  }
  console.log(row);
}
