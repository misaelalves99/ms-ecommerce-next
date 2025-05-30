// app/checkout/[productId]/page.tsx

import CheckoutClient from '../../checkout/[productId]/CheckoutClient';

interface PageProps {
  params: { productId: string };
}

export default function CheckoutPage({ params }: PageProps) {
  return <CheckoutClient productId={params.productId} />;
}
