import { atom } from "recoil";

export const todoState = atom({
  key: "todos",
  default: [],
});
