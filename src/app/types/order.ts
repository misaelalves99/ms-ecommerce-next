export interface OrderItem {
  product: {
    id: number;
    name: string;
    price: number;
  };
  quantity: number;
}

export type Order = {
  id: number;
  date: string;
  total: number;
  items: {
    product: {
      id: number;
      name: string;
      price: number;
    };
    quantity: number;
  }[];
};
