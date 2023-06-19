import React from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";
import { useTodoStore } from "./TodoState";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;
