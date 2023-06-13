import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: [],
  },
  reducers: {

    addToCart(state, action) {
      const productTransform = {
        ...action.payload,
      }
      state.cartProducts = [productTransform, ...state.cartProducts]
    },

    removeFromCart(state, action) {
      state.cartProducts = state.cartProducts.filter(el => action.payload.title !== el.title)
    },

    clearAllItems(state) {
      state.cartProducts = []
    },

    updateAmount(state, action) {
      const { item, value } = action.payload;
      state.cartProducts = state.cartProducts.map(el => {
        if (el.title === item.title) {
          return {
            ...el,
            amount: item.amount + value,
          }
        }
        return el;
      })
      state.cartProducts = [...state.cartProducts]
    },
  },
})

export const { addToCart, removeFromCart, clearAllItems, updateAmount } = cartSlice.actions;
export default cartSlice.reducer;