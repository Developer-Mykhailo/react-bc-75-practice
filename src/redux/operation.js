import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./auth/authOperations";

export const fetchToDos = createAsyncThunk(
  "todos/fetchToDos",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/tasks");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const isEmptyList = getState().todos.items.length === 0;
      return isEmptyList;
    },
  }
);

export const addToDos = createAsyncThunk(
  "todos/addToDos",
  async (toDo, thunkAPI) => {
    try {
      const { data } = await instance.post("/tasks", toDo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteToDos = createAsyncThunk(
  "todos/deleteToDos",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/tasks/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editToDos = createAsyncThunk(
  "todos/editToDos",
  async (toDo, thunkAPI) => {
    try {
      const { data } = await instance.put(`/tasks/${toDo.id}`, {
        text: toDo.text,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
