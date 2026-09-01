import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
 const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");
const [loaded, setLoaded] = useState(false);
  

  // Load todos when the app starts
useEffect(() => {
  const saved = localStorage.getItem("todos");

  if (saved) {
    setTodos(JSON.parse(saved));
  }

  setLoaded(true);
}, []);

  // Save todos whenever they change
 useEffect(() => {
  if (loaded) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}, [todos, loaded]);

  // Add a new todo
  const addTodo = () => {
    if (input.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  // Complete / uncomplete a todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />

            <span
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;