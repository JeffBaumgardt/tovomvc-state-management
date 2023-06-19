import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./TodoState";

function App() {
  return (
    <Provider store={store}>
      <Box sx={{ width: 400, my: 10, mx: "auto" }}>
        <TodoInput />
        <TodoList />
      </Box>
    </Provider>
  );
}

export default App;
