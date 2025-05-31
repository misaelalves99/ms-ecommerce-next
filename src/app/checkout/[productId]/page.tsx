// app/checkout/[productId]/page.tsx

import { notFound } from 'next/navigation';
import CheckoutClient from './CheckoutClient';
import { getProducts } from '@/app/lib/api/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finalizar Compra',
  description: 'Conclua seu pedido e forneça seus dados de entrega.',
};

export default async function CheckoutPage({ params }: { params: { productId: string } }) {
  const { productId } = params;

  try {
    const allProducts = await getProducts();
    const product = allProducts.find((p) => String(p.id) === String(productId));

    if (!product) {
      notFound();
    }

    return <CheckoutClient product={product} />;
  } catch (error) {
    console.error(`Erro ao buscar produto ${productId}:`, error);
    notFound();
  }
}
