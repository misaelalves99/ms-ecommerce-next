// app/checkout/[productId]/page.tsx

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CheckoutClient from './CheckoutClient';
import { getProducts } from '@/app/lib/api/products';

export const metadata: Metadata = {
  title: 'Finalizar Compra',
  description: 'Conclua seu pedido e forneça seus dados de entrega.',
};

interface CheckoutPageProps {
  params: {
    productId: string;
  };
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { productId } = params;

  try {
    const allProducts = await getProducts();
    const product = allProducts.find((p) => String(p.id) === String(productId));

    if (!product) {
      return notFound();
    }

    return <CheckoutClient product={product} />;
  } catch (error) {
    console.error(`Erro ao buscar produto ${productId} no servidor:`, error);
    return notFound();
  }
}
