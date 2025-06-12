import { configureStore } from "@reduxjs/toolkit";
import { filterReducer, toDoReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    todos: toDoReducer,
    filter: filterReducer,
  },
});
