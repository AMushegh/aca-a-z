function getTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "post",
    body: {},
  })
    .then((resp) => resp.json())
    .then((data) => data);
}

console.log("loading");
getTodos()
  .then(console.log)
  .finally(() => console.log("loaded"));
