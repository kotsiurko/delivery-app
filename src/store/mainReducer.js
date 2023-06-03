import { combineReducers } from '@reduxjs/toolkit';
import shop1Reducer from './sliceShop1';
import shop2Reducer from './sliceShop2';
import cartReducer from './sliceCart';

const rootReducer = combineReducers({
  shop1: shop1Reducer,
  shop2: shop2Reducer,
  cart: cartReducer,
});

export default rootReducer;