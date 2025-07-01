import React, { useState } from "react";
import { TODOS } from "../constants/todos";
import { Input } from "antd";
import { Button } from "antd";
export const TodoListContainer = () => {
  const [todos, setTodos] = useState(TODOS);
  const [searchTerm, setSearchTerm] = useState("");

  const onInputMethodChange = (value) => {
    setSearchTerm(value);
  };

  const onCheckboxClick = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(newTodos);
  };

  const onDeleteButtonClick = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => todo.title.includes(searchTerm));

  return (
    <div>
      <Input
        type="text"
        placeholder="Basic usage"
        value={searchTerm}
        onChange={(event) => onInputMethodChange(event.target.value)}
      />
      <ul style={{ listStyle: "none" }}>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onCheckboxClick(todo.id)}
              />
              <p
                style={todo.completed ? { textDecoration: "line-through" } : {}}
              >
                {todo.title}
              </p>
              <Button
                type="primary"
                shape="circle"
                onClick={() => onDeleteButtonClick(todo.id)}
              >
                &times;
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
