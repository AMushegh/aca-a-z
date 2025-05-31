// function squarePromise(promise) {
//   return new Promise((res, rej) => {
//     promise
//       .then((v) => {
//         if (typeof v === "number" || !isNaN(v)) {
//           res(v * v);
//         } else {
//           rej(`Cannot convert ${v} to a number!`);
//         }
//       })
//       .catch((e) => {
//         rej(e);
//       });
//   });
// }

// const inputPromise = new Promise((res, rej) => {
//   rej(32423420908);
// });

// squarePromise(inputPromise)
//   .then(console.log)
//   .catch((e) => console.log("error", e));

function mapPromise(promise, cb) {
  return new Promise((res, rej) => {
    promise
      .then((v) => {
        res(cb(v));
      })
      .catch((e) => {
        rej(e);
      });
  });
}

const myPromise = new Promise((resolve, reject) => {
  reject(2);
});

const timesTwo = (val) => val * 2;

mapPromise(myPromise, timesTwo)
  .then((result) => console.log(result))
  .catch(console.log);
