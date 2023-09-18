import { createSlice } from "@reduxjs/toolkit";

const weeklySlice = createSlice({
  name: "weekly",
  initialState: [
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
  ],
  reducers: {
    addToWeekly: (state, action) => {
      state.push(action.payload);
    },
    removeFromWeekly: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const weeklyReducer = weeklySlice.reducer;
export const { addToWeekly, removeFromWeekly } = weeklySlice.actions;
