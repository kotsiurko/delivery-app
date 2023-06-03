import { createSlice } from '@reduxjs/toolkit';

const shop2Slice = createSlice({
  name: 'shop2',
  initialState: { products2: [] },
  reducers: {
    setData(state, action) {
      state.products2.push(action.payload);
    },
  },
});

export const { setData } = shop2Slice.actions;
export default shop2Slice.reducer;