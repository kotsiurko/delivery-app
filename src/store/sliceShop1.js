import { createSlice } from '@reduxjs/toolkit';

const shop1Slice = createSlice({
  name: 'fakestore',
  initialState: { fakestoreArr: [] },
  reducers: {
    setDataFakeStore(state, action) {
      state.fakestoreArr = action.payload;
    },
  },
});

export const { setDataFakeStore } = shop1Slice.actions;
export default shop1Slice.reducer;