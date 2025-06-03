import { ReactNode } from 'react';
import { Product } from './product';

export type WishlistContextType = {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
};

export type WishlistProviderProps = {
  children: ReactNode;
};
