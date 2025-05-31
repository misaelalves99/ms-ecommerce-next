// app/checkout/[productId]/CheckoutClient.tsx

'use client';

import React, { useState } from 'react';
import { Product } from '@/app/types/product';
import { CheckoutData } from '@/app/types/checkout';
import styles from './CheckoutClient.module.css';

import AddressSection from '../../components/checkout/AddressSection';
import ShippingOptions, { ShippingOption } from '../../components/checkout/ShippingOptions';
import CheckoutForm from '../../components/checkout/CheckoutForm';
import OrderSummary from '../../components/checkout/OrderSummary';

interface CheckoutClientProps {
  product: Product;
}

const CheckoutClient: React.FC<CheckoutClientProps> = ({ product }) => {
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedShipping, setSelectedShipping] = useState<ShippingOption>({
    id: 'normal',
    name: 'Normal',
    price: 0,
    deliveryTime: '15 de maio, quinta',
  });

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

export default CheckoutClient;
