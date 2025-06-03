// app/hooks/cartReducer.ts

import { CartItem } from "../types/cart";
import { CartState, CartAction } from "../types/cartReducer";

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (item) => item.productId === action.product.id
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.productId === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      const newItem: CartItem = {
        id: action.product.id,
        productId: action.product.id,
        name: action.product.name,
        price: action.product.price,
        imageUrl: action.product.imageUrl ?? action.product.image ?? '',
        quantity: 1,
        product: action.product,
        category: action.product.category,
      };

      return {
        items: [...state.items, newItem],
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedItems = state.items
        .map((item) =>
          item.productId === action.productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      return { items: updatedItems };
    }

    case "CLEAR_CART":
      return { items: [] };

    default:
      return state;
  }
};
