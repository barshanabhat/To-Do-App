import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

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
    <li key={todo.id}>{todo.text}</li>
  ))}
</ul>
    </div>
  );
}

export default App;