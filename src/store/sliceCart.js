import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: [],
  },
  reducers: {
    addToCart(state, action) {
      state.cartProducts = [action.payload, ...state.cartProducts]
    },
    removeFromCart(state, action) {
      state.cartProducts = state.cartProducts.filter(el => action.payload.title !== el.title)
    },
    clearAllItems(state) {
      state.cartProducts = []
    },
  },
})

export const { addToCart, removeFromCart, clearAllItems } = cartSlice.actions;
export default cartSlice.reducer;