import { configureStore } from "@reduxjs/toolkit";
import {
  weeklyReducer,
  addToWeekly,
  removeFromWeekly,
} from "./slices/weeklySlice";
import {
  cartReducer,
  addToCart,
  removeFromCart,
  increaceQuantity,
  decreaceQuantity,
} from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    weekly: weeklyReducer,
  },
});
export {
  store,
  addToCart,
  removeFromCart,
  addToWeekly,
  removeFromWeekly,
  increaceQuantity,
  decreaceQuantity,
};
