// app/checkout/[productId]/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { getProducts } from '../../lib/api/products';
import { CheckoutData } from '../../types/checkout';
import type { Product } from '../../types/product';

import AddressSection from '../../components/checkout/AddressSection';
import ShippingOptions, { ShippingOption } from '../../components/checkout/ShippingOptions';
import CheckoutForm from '../../components/checkout/CheckoutForm';
import OrderSummary from '../../components/checkout/OrderSummary';

import styles from './CheckoutPage.module.css';

export const dynamic = 'force-dynamic';

export default function CheckoutPage({ params }: { params: { productId: string } }) {
  const { productId } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false);

  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedShipping, setSelectedShipping] = useState<ShippingOption>({
    id: 'normal',
    name: 'Normal',
    price: 0,
    deliveryTime: '15 de maio, quinta',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const allProducts = await getProducts();
        const found = allProducts.find((p) => String(p.id) === String(productId));
        if (!found) {
          setError(true);
        } else {
          setProduct(found);
        }
      } catch (err) {
        console.error(`Erro ao buscar produto ${productId}:`, err);
        setError(true);
      }
    };

    fetchProduct();
  }, [productId]);

  if (error) {
    notFound();
  }

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    setQuantity((prev) => (type === 'increment' ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const handleCheckoutSubmit = (data: CheckoutData) => {
    setCheckoutData(data);
    alert('✅ Dados de entrega recebidos.');
  };

  if (!product) {
    return <div className={styles.checkoutContainer}>Carregando produto...</div>;
  }

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.checkoutPanel}>
        <AddressSection />
        <ShippingOptions selectedShipping={selectedShipping} onSelect={setSelectedShipping} />
        <CheckoutForm onSubmit={handleCheckoutSubmit} />
      </div>
      <OrderSummary
        product={product}
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
        selectedShipping={selectedShipping}
        onGoToPayment={() => {
          if (!checkoutData) {
            alert('Por favor, preencha seus dados de entrega.');
            return;
          }
          alert('Ir para a página de pagamento (funcionalidade não implementada).');
          console.log({ checkoutData, product, quantity, selectedShipping });
        }}
      />
    </div>
  );
}
