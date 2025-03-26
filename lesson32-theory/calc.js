const NUMBER_BUTTONS_MAP_VALUES = {
  dot: ".",
};

let value1 = "";
let value2 = "";
let operator = "";

const numberButtons = document.querySelectorAll(".number-button");
const screen = document.querySelector(".screen");
const clearButton = document.querySelector(".clear-button");

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    screen.innerText +=
      NUMBER_BUTTONS_MAP_VALUES[numberButton.id] ?? numberButton.id;
  });
});

clearButton.addEventListener("click", () => {
  screen.innerText = "";
  value1 = "";
  value2 = "";
  operator = "";
});
