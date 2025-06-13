import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "points",
  initialState: { one: 0, two: 0, three: 0, four: 0, five: 0 },
  reducers: {
    setPoints: (state, { payload }) => {
      state[payload.key] = state[payload.key] + payload.value;
    },
    resetPoints: () => {
      return { one: 0, two: 0, three: 0, four: 0, five: 0 };
    },
  },
});
export const { setPoints, resetPoints } = slice.actions;
export const pointsReducer = slice.reducer;
