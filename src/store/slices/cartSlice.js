import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      //check if item is already in cart
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index].quantity++;
        return;
      }
      //if not add it
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    increaceQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].quantity++;
    },
    decreaceQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      if (state[index].quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        state[index].quantity--;
      }
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const { addToCart, removeFromCart, increaceQuantity, decreaceQuantity } =
  cartSlice.actions;
