import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    text: "",
  },
  reducers: {
    changeTextFilter(state, action) {
      state.text = action.payload;
    },
  },
});
// console.dir(filterSlice);
export const selectTextFilters = (state) => state.filters.text;
export const { changeTextFilter } = filterSlice.actions;
export default filterSlice.reducer;
