import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://684ffb52e7c42cfd1796d813.mockapi.io",
});

export const fetchToDos = createAsyncThunk(
  "todos/fetchToDos",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/todos");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToDos = createAsyncThunk(
  "todos/addToDos",
  async (toDo, thunkAPI) => {
    try {
      const { data } = await instance.post("/todos", toDo);
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
      const { data } = await instance.delete(`/todos/${id}`);
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
      const { data } = await instance.put(`/todos/${toDo.id}`, {
        text: toDo.text,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
