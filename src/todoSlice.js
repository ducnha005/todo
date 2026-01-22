import { createSlice } from "@reduxjs/toolkit";

const savedTodo = JSON.parse(localStorage.getItem("todo")) || [];
const todoSlice = createSlice({
  name: "todo",
  initialState: { listItem: savedTodo },
  reducers: {
    add: (state, action) => {
      state.listItem.push(action.payload);
    },
    remove: (state, action) => {
      state.listItem = state.listItem.filter(
        (item) => item.id !== action.payload,
      );
    },
    toggle: (state, action) => {
      const item = state.listItem.find((i) => i.id === action.payload);
      if (item) {
        item.completed = !item.completed;
      }
    },
  },
});

export const { add, remove, toggle } = todoSlice.actions;
export default todoSlice.reducer;
