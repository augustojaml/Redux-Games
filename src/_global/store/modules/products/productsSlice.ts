import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './productsThunk';
import { INITIAL_STATE } from './productsTypes';

const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export { productsSlice };
