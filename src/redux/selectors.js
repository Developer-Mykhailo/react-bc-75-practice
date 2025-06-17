import { createSelector } from "@reduxjs/toolkit";

export const selectTodos = (state) => state.todos.items;
export const selectCurrentTodo = (state) => state.todos.currenToDo;
export const selectIsLoading = (state) => state.todos.isLoading;
export const selectIsError = (state) => state.todos.isError;
export const selectFilter = (state) => state.filter.text;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectTodos],
  (filter, todos) => {
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
