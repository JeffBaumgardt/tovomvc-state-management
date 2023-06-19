import React from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onChange }) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onChange={onChange}
        />
      ))}
    </List>
  );
};

export default TodoList;
