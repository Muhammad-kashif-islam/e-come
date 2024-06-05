import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";
const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem: (store, action) => {
      //   console.log(action);
      return (store = action.payload.items);
    },
  },
});

export default itemsSlice;
export const itemsActions = itemsSlice.actions;
