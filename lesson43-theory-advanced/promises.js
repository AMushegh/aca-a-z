function getPromiseWithRandomNumberResolve() {
  const timeoutDuration = Math.random() * 5000 + 700;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(timeoutDuration);
    }, timeoutDuration);
  });
}

const loaderElement = document.querySelector(".loader");
const contentElement = document.querySelector(".content");

loaderElement.innerHTML = "loading";

getPromiseWithRandomNumberResolve()
  .then((number) => {
    contentElement.innerHTML = "number is: " + number;
  })
  .catch(() => {
    contentElement.innerHTML = "something went wrong";
  })
  .finally(() => {
    loaderElement.innerHTML = "";
  });

console.log("1dhjkdhajkw");
console.log("1dhjkdhajkw");
console.log("1dhjkdhajkw");
console.log("1dhjkdhajkw");

// console.log("loading");
// getPromiseWithRandomNumberResolve().then((v) => {
//   console.log(v);
//   console.log("data Received");
// });

// const p1 = new Promise((resolve, reject) => {
//   let a = 1;
//   setTimeout(() => {
//     reject(a);
//   }, 2000);
// });

// p1.then((v) => {
//   console.log(v);
//   return "100";
// })
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((error) => {
//     console.log(error, "error");
//     return "error state";
//   })
//   .then((b) => {
//     console.log(b, "after error");
//   })
//   .finally(() => {
//     console.log("fin");
//   });
