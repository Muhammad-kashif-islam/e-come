import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetchStatus",
  initialState: { fetchDoneCompleted: false },
  reducers: {
    fetchDone: (state) => {
      state.fetchDoneCompleted = true;
    },
  },
});
export default fetchSlice;
export const fetchActions = fetchSlice.actions;
