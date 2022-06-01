import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../libs/api';
import { IProduct } from './cartsTypes';

export const checkProductStockByIdAndAddToCart = createAsyncThunk(
  'stock/getById',
  async (product: IProduct) => {
    const response = await api.get(`stock/${product.id}`);
    return {
      product,
      stock: response.data,
    };
  }
);
