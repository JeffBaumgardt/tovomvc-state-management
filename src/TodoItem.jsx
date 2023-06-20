import React from "react";
import { ListItem, Checkbox, Button, Box, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "./TodoState";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
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
          onChange={() => dispatch(toggleTodo(todo.id))}
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
      <Button
        startIcon={<Delete />}
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        Remove
      </Button>
    </ListItem>
  );
};

export default TodoItem;
