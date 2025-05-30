// app/orders/page.tsx

'use client'; 

import React, { useEffect, useState } from 'react';
import OrderCard from '../components/checkout/OrderCard';
import { Order } from '../types/order';
import styles from './OrdersPage.module.css';

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockOrders: Order[] = [
      {
        id: 101,
        date: new Date().toISOString(),
        total: 250.75,
        items: [
          { product: { id: 1, name: 'Camiseta', price: 50 }, quantity: 2 },
          { product: { id: 2, name: 'Tênis', price: 75 }, quantity: 1 },
        ],
      },
      {
        id: 102,
        date: new Date().toISOString(),
        total: 149.90,
        items: [
          { product: { id: 3, name: 'Jaqueta', price: 149.9 }, quantity: 1 },
        ],
      },
    ];

    setTimeout(() => {
      setOrders(mockOrders);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <p className={styles.message}>Carregando pedidos...</p>;
  if (!orders.length) return <p className={styles.message}>Nenhum pedido encontrado.</p>;

  return (
    <div className={styles.ordersPage}>
      <h1 className={styles.title}>Seus Pedidos</h1>
      <div className={styles.orderList}>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
