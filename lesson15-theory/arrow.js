const add = (a, b) => ({
  name: "3457890",
});

console.log(add(5, 6));

function foo() {
  for (let i = 0; i < 10; i++) {
    if (i === 7) {
      return;
    }
    console.log(i);
  }
}
