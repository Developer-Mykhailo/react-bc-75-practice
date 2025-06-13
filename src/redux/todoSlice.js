import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todos",
  initialState: { items: [], currentToDo: null },
  reducers: {
    addToDo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteToDo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    setCurrentToDo: (state, action) => {
      state.currentToDo = action.payload;
    },
    updateToDo: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === state.currentToDo.id
          ? { ...state.currentToDo, text: action.payload }
          : item
      );
      state.currentToDo = null;
    },
  },
});
export const { addToDo, deleteToDo, setCurrentToDo, updateToDo } =
  slice.actions;
export const toDosReducer = slice.reducer;
