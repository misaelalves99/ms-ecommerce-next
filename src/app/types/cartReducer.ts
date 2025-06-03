import { Product } from "./product";
import { CartItem } from "./cart";

export type CartAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; productId: number | string }
  | { type: "CLEAR_CART" };

export interface CartState {
  items: CartItem[];
}
