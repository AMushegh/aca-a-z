let todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
  {
    userId: 1,
    id: 11,
    title: "vero rerum temporibus dolor",
    completed: true,
  },
  {
    userId: 1,
    id: 12,
    title: "ipsa repellendus fugit nisi",
    completed: true,
  },
  {
    userId: 1,
    id: 13,
    title: "et doloremque nulla",
    completed: false,
  },
  {
    userId: 1,
    id: 14,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true,
  },
  {
    userId: 1,
    id: 15,
    title: "ab voluptatum amet voluptas",
    completed: true,
  },
  {
    userId: 1,
    id: 16,
    title: "accusamus eos facilis sint et aut voluptatem",
    completed: true,
  },
  {
    userId: 1,
    id: 17,
    title: "quo laboriosam deleniti aut qui",
    completed: true,
  },
  {
    userId: 1,
    id: 18,
    title: "dolorum est consequatur ea mollitia in culpa",
    completed: false,
  },
  {
    userId: 1,
    id: 19,
    title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    completed: true,
  },
  {
    userId: 1,
    id: 20,
    title: "ullam nobis libero sapiente ad optio sint",
    completed: true,
  },
];

let listElement = document.querySelector(".container ul");
let buttonElement = document.querySelector("button");

const addInput = document.getElementById("addInput");

function clearTodos() {
  listElement.innerHTML = "";
}

function toggleCompletedState(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        userId: todo.userId,
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
    }

    return todo;
  });

  clearTodos();
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);

  clearTodos();
  renderTodos();
}
function renderTodos() {
  todos.forEach((todo) => {
    let item = document.createElement("li");
    item.classList.add("listItem");
    let innerDiv = document.createElement("div");
    let text = document.createElement("span");
    text.innerText = todo.title;

    const buttonElement = document.createElement("button");
    buttonElement.innerText = "x";
    innerDiv.append(text, buttonElement);

    if (todo.completed) {
      text.classList.add("completed");
    }

    text.addEventListener("click", () => toggleCompletedState(todo.id));
    buttonElement.addEventListener("click", () => deleteTodo(todo.id));
    item.appendChild(innerDiv);
    listElement.appendChild(item);
  });
}

addInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && addInput.value.trim().length !== 0) {
    todos.push({
      id: todos.length + 1000,
      userId: 178,
      title: addInput.value,
      completed: false,
    });

    addInput.value = "";
    clearTodos();
    renderTodos();
  }
});

renderTodos();
