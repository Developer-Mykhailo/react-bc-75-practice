import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin, fetchRegister, logOut } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        (state.token = null), (state.isLoggedIn = false);
      });
  },
});

export const authReducer = authSlice.reducer;
