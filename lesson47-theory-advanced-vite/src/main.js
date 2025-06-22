import axios from "axios";
import "./style.css";
import * as helpers from "./helpers";

const rootElement = document.getElementById("app");

console.log(helpers.keyGenerator("adhjkwahdjk"));

async function getData() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return data;
}

async function renderTodos() {
  const todos = await getData();

  const ulELement = document.createElement("ul");

  todos.forEach((todo) => {
    const liElement = document.createElement("li");
    liElement.innerText = todo.title;
    ulELement.appendChild(liElement);
  });

  rootElement.appendChild(ulELement);
}

renderTodos();
