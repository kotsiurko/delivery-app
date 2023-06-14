import { combineReducers } from '@reduxjs/toolkit';
import shop1Reducer from './sliceShop1';
import shop2Reducer from './sliceShop2';
import cartReducer from './sliceCart';
import favReducer from './sliceFavs';

const rootReducer = combineReducers({
  fakestore: shop1Reducer,
  escuelajs: shop2Reducer,
  cart: cartReducer,
  favs: favReducer,
});

export default rootReducer;