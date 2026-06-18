"use client";

import { useCurrencyStore } from "@/stores/currency";

interface ProductPriceProps {
  price: number; // always USD
  className?: string;
}

export function ProductPrice({
  price,
  className = "text-2xl font-light text-foreground mb-8",
}: ProductPriceProps) {
  const { formatConverted } = useCurrencyStore();

  return <p className={className}>{formatConverted(price)}</p>;
}
