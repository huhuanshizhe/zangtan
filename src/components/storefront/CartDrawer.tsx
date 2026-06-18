"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/stores/cart";
import { useCurrencyStore } from "@/stores/currency";
import { siteConfig } from "@/config/site";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCartStore();
  const { formatConverted } = useCurrencyStore();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const freeShippingRemaining =
    siteConfig.shipping.freeShippingThreshold - subtotal();
  const freeShippingProgress = Math.min(
    (subtotal() / siteConfig.shipping.freeShippingThreshold) * 100,
    100
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-background shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                <h2 className="font-serif text-lg">
                  Your Bag ({items.length})
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            {subtotal() > 0 && (
              <div className="px-6 py-3 bg-secondary/50 border-b border-border">
                {freeShippingRemaining > 0 ? (
                  <p className="text-xs text-muted-foreground text-center">
                    Add{" "}
                    <span className="font-medium text-foreground">
                      {formatConverted(freeShippingRemaining)}
                    </span>{" "}
                    more for complimentary shipping
                  </p>
                ) : (
                  <p className="text-xs text-foreground text-center font-medium">
                    You&apos;ve unlocked complimentary shipping
                  </p>
                )}
                <div className="mt-2 h-px w-full bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground/30 mb-4" />
                  <p className="font-serif text-lg text-foreground mb-1">
                    Your bag is empty
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Discover our curated collection of handwoven Tibetan carpets.
                  </p>
                  <Link
                    href="/collection"
                    onClick={closeCart}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    Explore Collection
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 px-6 py-5">
                      {/* Image */}
                      <div className="w-20 h-24 rounded-sm bg-secondary overflow-hidden shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2">
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">
                              {item.category}
                            </p>
                            <Link
                              href={`/product/${item.slug}`}
                              className="font-serif text-sm text-foreground hover:text-primary transition-colors line-clamp-1"
                            >
                              {item.name}
                            </Link>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground/50 hover:text-destructive transition-colors shrink-0"
                            aria-label={`Remove ${item.name}`}
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <div className="flex items-end justify-between mt-3">
                          {/* Quantity */}
                          <div className="flex items-center border border-border rounded-sm">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          {/* Price */}
                          <p className="text-sm font-medium text-foreground">
                            {formatConverted(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-5 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">
                    {formatConverted(subtotal())}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Shipping and taxes calculated at checkout
                </p>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="block w-full text-center rounded-md bg-foreground text-background py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  View Bag & Checkout
                </Link>
                <button
                  onClick={closeCart}
                  className="block w-full text-center text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
