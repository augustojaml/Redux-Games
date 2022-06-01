import { SerializedError } from '@reduxjs/toolkit';

export interface IProduct {
  id: number;
  image: string;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  isLoading: boolean;
  error: SerializedError | any | undefined;
  productOutOfStock: number[];
}

export const INITIAL_STATE: ICartState = {
  items: [],
  isLoading: false,
  error: undefined,
  productOutOfStock: [],
};
