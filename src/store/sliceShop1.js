import { createSlice } from '@reduxjs/toolkit';

const shop1Slice = createSlice({
  name: 'shop1',
  initialState: { products1: [] },
  reducers: {
    setData(state, action) {
      state.products1.push(action.payload);
    },
  },
});

export const { setData } = shop1Slice.actions;
export default shop1Slice.reducer;