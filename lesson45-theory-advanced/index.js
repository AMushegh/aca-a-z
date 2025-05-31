const p1 = new Promise((res) => {
  setTimeout(() => res(1), 1000);
});
const p2 = new Promise((res) => {
  setTimeout(() => res(2), 2000);
});
const p3 = new Promise((res) => {
  setTimeout(() => res(3), 3000);
});

// p1.then((p1Value) => {
//   p2.then((p2Value) => {
//     p3.then((p3Value) => {
//       console.log({ p1Value, p2Value, p3Value });
//     });
//   });
// });

// async function main() {
//   try {
//     const p1Value = await p1;
//     const p2Value = await p2;
//     const p3Value = await p3;

//     console.log({ p1Value, p2Value, p3Value });
//   } catch (e) {
//     console.log(e, "error");
//   } finally {
//   }
// }

// const main = async function () {
//   try {
//     const p1Value = await p1;
//     const p2Value = await p2;
//     const p3Value = await p3;
//     console.log({ p1Value, p2Value, p3Value });
//   } catch (e) {
//     console.log(e, "error");
//   } finally {
//   }
// };

const main = async () => {
  try {
    const p1Value = await p1;
    const p2Value = await p2;
    const p3Value = await p3;

    return { p1Value, p2Value, p3Value };
  } catch (e) {
    console.log(e, "error");
  } finally {
  }
};

main().then(console.log);
