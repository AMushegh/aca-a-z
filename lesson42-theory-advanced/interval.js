let a = 1;

let intervalId = setInterval(() => {
  let date = new Date();
  console.log(
    date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds()
  );
}, 1000);

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  clearInterval(intervalId);
});
