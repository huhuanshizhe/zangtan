"use client";

import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/stores/cart";

interface AddToCartButtonProps {
  product: {
    id: string;
    slug: string;
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <button
      onClick={handleAdd}
      disabled={added}
      className={`w-full flex items-center justify-center gap-2 rounded-md py-3.5 text-sm font-medium transition-all duration-300 ${
        added
          ? "bg-jade text-white"
          : "bg-foreground text-background hover:bg-foreground/90"
      }`}
    >
      {added ? (
        <>
          <Check className="h-4 w-4" />
          Added to Bag
        </>
      ) : (
        <>
          <ShoppingBag className="h-4 w-4" />
          Add to Bag
        </>
      )}
    </button>
  );
}
