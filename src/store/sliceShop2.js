import { createSlice } from '@reduxjs/toolkit';

const shop2Slice = createSlice({
  name: 'escuelajs',
  initialState: { escuelajsArr: [] },
  reducers: {
    setDataEscuelajs(state, action) {
      state.escuelajsArr = action.payload;
    },
  },
});

export const { setDataEscuelajs } = shop2Slice.actions;
export default shop2Slice.reducer;