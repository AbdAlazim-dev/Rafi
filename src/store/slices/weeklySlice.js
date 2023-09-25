import { createSlice } from "@reduxjs/toolkit";

//check if there is a cart in local storage
const loadWeeklyFromLocalStorage = () => {
  const weeklyData = localStorage.getItem("weekly");
  return weeklyData ? JSON.parse(weeklyData) : [];
};

const weeklySlice = createSlice({
  name: "weekly",
  initialState: loadWeeklyFromLocalStorage(),
  reducers: {
    addToWeekly: (state, action) => {
      //check if item is already in the list
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index].quantity++;
        return;
      }
      //add if its not
      state.push(action.payload);
      //save to local storage
      localStorage.setItem("weekly", JSON.stringify(state));
    },
    removeFromWeekly: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload.id);
      // Update local storage
      localStorage.setItem("weekly", JSON.stringify(newState));
      return newState;
    },
    increaceWeeklyQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].quantity++;
      // Update local storage
      localStorage.setItem("weekly", JSON.stringify(state));
    },
    decreaceWeeklyQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      if (state[index].quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        state[index].quantity--;
      }
      // Update local storage
      localStorage.setItem("weekly", JSON.stringify(state));
    },
  },
});
export const weeklyReducer = weeklySlice.reducer;
export const {
  addToWeekly,
  removeFromWeekly,
  increaceWeeklyQuantity,
  decreaceWeeklyQuantity,
} = weeklySlice.actions;
