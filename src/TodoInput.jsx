import React, { useState } from "react";
import { OutlinedInput, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodoState";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <OutlinedInput
        sx={{ flex: 1 }}
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <Button sx={{ ml: 2 }} variant="contained" onClick={handleAdd}>
        Add todo
      </Button>
    </Box>
  );
};

export default TodoInput;
