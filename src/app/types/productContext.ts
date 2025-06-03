import { Dispatch, SetStateAction, ReactNode } from 'react';
import { Product } from './product';

export type ProductContextType = {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  loading: boolean;
  error: string;
  fetchProducts: () => void;
};

export type ProductProviderProps = {
  children: ReactNode;
};
