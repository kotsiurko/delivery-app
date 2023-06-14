import { createSlice } from '@reduxjs/toolkit'

const favsSlice = createSlice({
  name: 'favs',
  initialState: {
    favsProducts: [],
  },
  reducers: {

    addToFavs(state, action) {
      state.favsProducts = [action.payload, ...state.favsProducts]
    },

    removeFromFavs(state, action) {
      state.favsProducts = state.favsProducts.filter(el => action.payload.title !== el.title)
    },

    clearAllFavs(state) {
      state.favsProducts = []
    },

  },
})

export const { addToFavs, removeFromFavs, clearAllFavs } = favsSlice.actions;
export default favsSlice.reducer;