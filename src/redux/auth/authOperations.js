import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// hjjdfjjfh@gmail.com
// hjjdf1&7L

export const instance = axios.create({
  baseURL: "https://task-manager-api.goit.global/",
});

const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const fetchRegister = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/users/signup", userData);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/users/login", userData);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await instance.post("/users/logout");
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return rejectWithValue("no-token");
    }
    setAuthHeader(persistedToken);
    try {
      const { data } = await instance.get("/users/me");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
