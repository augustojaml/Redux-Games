import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { cartsSlice } from './modules/carts/cartsSlice';
import { productsSlice } from './modules/products/productsSlice';

const store = configureStore({
  reducer: combineReducers({
    products: productsSlice.reducer,
    carts: cartsSlice.reducer,
  }),
});

export type IStoreReducers = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export { store };
