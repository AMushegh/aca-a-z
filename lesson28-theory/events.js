const greenCube = document.querySelector(".green");
const redCube = document.querySelector(".red");
const htmlElement = document.querySelector("html");

greenCube.addEventListener("click", () => {
  console.log("green");
});

htmlElement.addEventListener("click", () => {
  console.log("html");
});

redCube.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("red");
});
