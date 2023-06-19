import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { Box } from "@mui/material";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Box sx={{ width: 400, my: 10, mx: "auto" }}>
        <TodoInput />
        <TodoList />
      </Box>
    </RecoilRoot>
  );
}

export default App;
