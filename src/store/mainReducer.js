import { combineReducers } from '@reduxjs/toolkit';
import shop1Reducer from './sliceShop1';
import shop2Reducer from './sliceShop2';
import cartReducer from './sliceCart';

const rootReducer = combineReducers({
  fakestore: shop1Reducer,
  escuelajs: shop2Reducer,
  cart: cartReducer,
});

export default rootReducer;