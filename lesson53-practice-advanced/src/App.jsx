import { useEffect, useState } from "react";
import "./App.css";
import { Time } from "./Time";
import { fetchTodos } from "./helper";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [searchDebounce, setSearchDebounce] = useState("");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setSearchDebounce(search);
    }, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  useEffect(() => {
    const getData = async () => {
      const todos = await fetchTodos(search);

      setTodos(todos);
    };

    getData();
  }, [searchDebounce]);

  return (
    <div>
      <input
        type="text"
        onChange={({ target: { value } }) => setSearch(value)}
      />
      {todos.map((todo) => (
        <div key={todo.id} className="todo" style={{ display: "flex" }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              setTodos((prevTodos) =>
                prevTodos.map((t) =>
                  t.id === todo.id ? { ...t, completed: !t.completed } : t
                )
              );
            }}
          />
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
