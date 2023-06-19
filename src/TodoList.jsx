import React from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";
import { useRecoilValue } from "recoil";
import { todoState } from "./TodoState";

const TodoList = () => {
  const todos = useRecoilValue(todoState);

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;
