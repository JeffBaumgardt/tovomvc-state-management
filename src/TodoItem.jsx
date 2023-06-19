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
        textDecoration: todo.complete ? "line-through" : "none",
        display: "flex",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: "4px",
        mb: 1,
      }}
    >
      <Box sx={{ flex: 1, display: "flex" }}>
        <Checkbox
          checked={todo.complete}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <Typography sx={{ lineHeight: "42px" }}>{todo.text}</Typography>
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
