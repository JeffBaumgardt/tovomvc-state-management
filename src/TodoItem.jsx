import React from "react";
import { ListItem, Checkbox, Button, Box, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { todoState } from "./TodoState";
import { useSetRecoilState } from "recoil";

const TodoItem = ({ todo }) => {
  const setTodos = useSetRecoilState(todoState);

  const handleToggle = (id) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <ListItem
      sx={{
        display: "flex",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: "4px",
        mb: 1,
      }}
    >
      <Box sx={{ flex: 1, display: "flex" }}>
        <Checkbox
          checked={todo.completed}
          onChange={() => handleToggle(todo.id)}
        />
        <Typography
          sx={{
            lineHeight: "42px",
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </Typography>
      </Box>
      <Button startIcon={<Delete />} onClick={() => handleDelete(todo.id)}>
        Remove
      </Button>
    </ListItem>
  );
};

export default TodoItem;
