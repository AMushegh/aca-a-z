const p1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

const p2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });

// async function foo() {
//   const res = await p1();
//   console.log(res);
//   const res2 = await p2();
//   console.log(res2);
// }
// foo();

p2().then((v1) => {
  console.log(v1);
});
p1().then((v2) => {
  console.log(v2);
});
