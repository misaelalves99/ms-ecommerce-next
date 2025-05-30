// app/checkout/[productId]/page.tsx

import CheckoutClient from './CheckoutClient';

export default async function CheckoutPage({ params }: { params: { productId: string } }) {

  return <CheckoutClient productId={params.productId} />;
}
