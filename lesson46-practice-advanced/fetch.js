const getTodos = () =>
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((resp) => resp.json())
    .then((data) => console.log(data));

const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", getTodos);
