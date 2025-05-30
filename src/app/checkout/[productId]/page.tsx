// app/checkout/[productId]/page.tsx

import type { Metadata } from 'next';
import React, { use } from 'react';
import CheckoutClient from './CheckoutClient';

export const metadata: Metadata = {
  title: 'Finalizar Compra',
  description: 'Conclua seu pedido e forneça seus dados de entrega.',
};

interface ParamsType {
  productId: string;
}

interface CheckoutPageProps {
  params: Promise<ParamsType>;
}

export default function CheckoutPage({ params }: CheckoutPageProps) {
  const resolvedParams = use(params);

  return <CheckoutClient productId={resolvedParams.productId} />;
}
