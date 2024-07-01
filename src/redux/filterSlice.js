import { createSlice } from "@reduxjs/toolkit";

export const selectFilter = (state) => state.filters.name;

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    filterContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = filterSlice.reducer;
export const { filterContact } = filterSlice.actions;
