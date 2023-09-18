import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
  ],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
