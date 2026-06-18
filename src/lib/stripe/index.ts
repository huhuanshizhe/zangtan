import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || "sk_test_placeholder",
  {
    typescript: true,
  }
);

/**
 * Calculate shipping cost based on region
 * Simplified for MVP - can be expanded with shipping_zones table
 */
export function calculateShipping(subtotal: number, _region?: string): number {
  // Free shipping over threshold
  if (subtotal >= 500) return 0;
  // Flat rate international shipping
  return 35;
}
