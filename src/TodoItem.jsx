import React from "react";
import { shallow } from "zustand/shallow";
import { ListItem, Checkbox, Button, Box, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useTodoStore } from "./TodoState";

const TodoItem = ({ todo }) => {
  const [toggleTodo, removeTodo] = useTodoStore(
    (state) => [state.toggleTodo, state.removeTodo],
    shallow
  );
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
          onChange={() => toggleTodo(todo.id)}
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
      <Button startIcon={<Delete />} onClick={() => removeTodo(todo.id)}>
        Remove
      </Button>
    </ListItem>
  );
};

export default TodoItem;
