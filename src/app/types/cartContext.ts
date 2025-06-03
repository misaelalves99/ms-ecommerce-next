import { Product } from './product';
import { CartItem } from './cart';

export interface CartState {
  items: CartItem[];
  totalAmount: number;
}

export type CartAction =
  | { type: 'ADD_ITEM'; item: CartItem }
  | { type: 'INCREMENT_ITEM'; product: Product }
  | { type: 'DECREMENT_ITEM'; productId: string | number }
  | { type: 'REMOVE_ITEM'; productId: string | number }
  | { type: 'CLEAR_CART' };

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  incrementFromCart: (product: Product) => void;
  decrementFromCart: (productId: string | number) => void;
  removeFromCart: (productId: string | number) => void;
  clearCart: () => void;
  cartTotal: number;
}
