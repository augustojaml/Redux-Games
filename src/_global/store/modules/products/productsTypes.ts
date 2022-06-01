import { SerializedError } from '@reduxjs/toolkit';

export interface IProduct {
  id: number;
  image: string;
  title: string;
  price: number;
}

export interface IProductState {
  products: IProduct[];
  isLoading: boolean;
  error: any | undefined | SerializedError;
}

export const INITIAL_STATE: IProductState = {
  products: [],
  isLoading: false,
  error: undefined,
};
