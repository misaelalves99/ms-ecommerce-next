// app/utils/shippingUtils.ts

export const calculateShippingCost = (weight: number, distance: number): number => {
  const rate = 0.05;
  return weight * distance * rate;
};

export const isEligibleForFreeShipping = (orderTotal: number): boolean => {
  const freeShippingThreshold = 50;
  return orderTotal >= freeShippingThreshold;
};
