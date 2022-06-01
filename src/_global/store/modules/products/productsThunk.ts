import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../libs/api';

export const getProducts = createAsyncThunk('products/getAll', async () => {
  const response = await api.get('products');
  return response.data;
});
