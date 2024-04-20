import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
  name: "like",
  initialState: {
    value: [],
  },
  reducers: {
    addToLike(state, action) {
      state.value = [...state.value, action.payload];
    },
    removeFromLike(state, action) {
      state.value = state.value.filter(
        (likes) => likes.id !== action.payload.id
      );
    },
  },
});

export const { addToLike, removeFromLike } = likeSlice.actions;

export default likeSlice.reducer;
