import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ width: 400, my: 10, mx: "auto" }}>
      <TodoInput />
      <TodoList />
    </Box>
  );
}

export default App;
