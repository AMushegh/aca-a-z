import axios from "axios";

export const fetchTodos = async (searchTerm) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const todos = response.data.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};
