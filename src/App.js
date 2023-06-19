import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { Box } from "@mui/material";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <Box sx={{ width: 400, my: 10, mx: "auto" }}>
      <TodoInput addNewTodo={addTodo} />
      <TodoList todos={todos} onDelete={removeTodo} onChange={toggleTodo} />
    </Box>
  );
}

export default App;
