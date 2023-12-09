import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "english",
};

export const language = createSlice({
  name: "language",
  initialState,
  reducers: {
    defineLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { defineLanguage } = language.actions;
export default language.reducer;
