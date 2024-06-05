import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => {
        return item != action.payload.id;
      });
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
