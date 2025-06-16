import { createSlice } from "@reduxjs/toolkit";
import { addToDos, deleteToDos, editToDos, fetchToDos } from "./operation";

const slice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    currentToDo: null,
    isLoading: false,
    isError: null,
  },
  reducers: {
    setCurrentToDo: (state, action) => {
      state.currentToDo = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchToDos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchToDos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchToDos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(addToDos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToDos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items.push(action.payload);
      })
      .addCase(addToDos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(deleteToDos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteToDos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = state.items.filter(
          (todo) => todo.id !== action.payload.id
        );
      })
      .addCase(deleteToDos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(editToDos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editToDos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = state.items.map((item) =>
          item.id === state.currentToDo.id ? action.payload : item
        );
        state.currentToDo = null;
      })
      .addCase(editToDos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      }),
});
export const { setCurrentToDo } = slice.actions;
export const toDosReducer = slice.reducer;
