import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemSlice";
import fetchSlice from "./FetchStatus";
import cartSlice from "./Cart";

const MainStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default MainStore;
