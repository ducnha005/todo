import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("todo", JSON.stringify(state.todo.listItem));
});

export default store;
