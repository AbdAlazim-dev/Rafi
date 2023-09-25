import { createSlice } from "@reduxjs/toolkit";

//check if there is a cart in local storage
const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
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
      //save to local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload.id);
      // Update local storage
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    increaceQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].quantity++;
      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decreaceQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      if (state[index].quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        state[index].quantity--;
      }
      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const { addToCart, removeFromCart, increaceQuantity, decreaceQuantity } =
  cartSlice.actions;
