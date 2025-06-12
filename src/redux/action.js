import { createAction } from "@reduxjs/toolkit";

export const addToDo = createAction("addToDo");
export const deleteTodo = createAction("deleteTodo");
export const setCurrentToDo = createAction("setCurrentToDo");
export const updateToDo = createAction("updateToDo");
export const setFilter = createAction("setFilter");
