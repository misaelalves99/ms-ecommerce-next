// app/checkout/[productId]/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { Product } from '@/app/types/product';
import { CheckoutData } from '@/app/types/checkout';
import { getProducts } from '@/app/lib/api/products';
import styles from './CheckoutPage.module.css';

import AddressSection from '../../components/checkout/AddressSection';
import ShippingOptions, { ShippingOption } from '../../components/checkout/ShippingOptions';
import CheckoutForm from '../../components/checkout/CheckoutForm';
import OrderSummary from '../../components/checkout/OrderSummary';

const CheckoutPage = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedShipping, setSelectedShipping] = useState<ShippingOption>({
    id: 'normal',
    name: 'Normal',
    price: 0,
    deliveryTime: '15 de maio, quinta',
  });

  const productId = params.productId;

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      try {
        const products = await getProducts();
        const selected = products.find((p) => p.id === Number(productId));
        if (selected) setProduct(selected);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    setQuantity((prev) => (type === 'increment' ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const handleCheckoutSubmit = (data: CheckoutData) => {
    setCheckoutData(data);
    alert('✅ Dados de entrega recebidos.');
  };

  const handleGoToPayment = () => {
    if (!checkoutData) {
      alert('Por favor, preencha seus dados de entrega.');
      return;
    }
    alert('Ir para a página de pagamento (funcionalidade não implementada).');
    console.log({ checkoutData, product, quantity, selectedShipping });
  };

  if (!product) {
    return <div className={styles.notFound}>Produto não encontrado.</div>;
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
        onGoToPayment={handleGoToPayment}
      />
    </div>
  );
};

export default CheckoutPage;
