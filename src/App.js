import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { Box } from "@mui/material";
import {TodoProvider} from "./TodoContext";

function App() {
  return (
    <TodoProvider>
      <Box sx={{ width: 400, my: 10, mx: "auto" }}>
        <TodoInput/>
        <TodoList />
      </Box>
    </TodoProvider>
  );
}

export default App;
