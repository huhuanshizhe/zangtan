"use client";

import Link from "next/link";
import { ArrowLeft, Minus, Plus, X, ShoppingBag, Truck, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/stores/cart";
import { useCurrencyStore } from "@/stores/currency";
import { siteConfig } from "@/config/site";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } =
    useCartStore();
  const { formatConverted } = useCurrencyStore();

  const freeShippingRemaining =
    siteConfig.shipping.freeShippingThreshold - subtotal();
  const shippingCost = subtotal() >= siteConfig.shipping.freeShippingThreshold || subtotal() === 0 ? 0 : 35;
  const total = subtotal() + shippingCost;

  if (items.length === 0) {
    return (
      <div className="py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground/20 mx-auto mb-6" />
          <h1 className="font-serif text-3xl text-foreground mb-3">
            Your Bag is Empty
          </h1>
          <p className="text-muted-foreground mb-8">
            Each piece in our collection is handwoven by artisans on the Tibetan
            plateau. Take your time to find the one that speaks to you.
          </p>
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-8 py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <Link
              href="/collection"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Continue Shopping
            </Link>
            <h1 className="font-serif text-3xl text-foreground">
              Shopping Bag
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-xs text-muted-foreground underline underline-offset-4 hover:text-destructive transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Items - 2/3 */}
          <div className="lg:col-span-2">
            {/* Free Shipping Banner */}
            {freeShippingRemaining > 0 ? (
              <div className="mb-6 rounded-md bg-secondary px-4 py-3">
                <p className="text-sm text-muted-foreground text-center">
                  Add{" "}
                  <span className="font-medium text-foreground">
                    {formatConverted(freeShippingRemaining)}
                  </span>{" "}
                  more for complimentary worldwide shipping
                </p>
              </div>
            ) : (
              <div className="mb-6 rounded-md bg-secondary px-4 py-3">
                <p className="text-sm text-foreground text-center font-medium">
                  Complimentary shipping included
                </p>
              </div>
            )}

            {/* Items List */}
            <div className="divide-y divide-border">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-6 py-6"
                  >
                    {/* Image */}
                    <Link
                      href={`/product/${item.slug}`}
                      className="w-28 h-36 rounded-sm bg-secondary overflow-hidden shrink-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    {/* Info */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          {item.category}
                        </p>
                        <Link
                          href={`/product/${item.slug}`}
                          className="font-serif text-lg text-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                          One of a kind — handwoven
                        </p>
                      </div>

                      <div className="flex items-end justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center border border-border rounded-sm">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Decrease"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-10 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Increase"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        <div className="flex items-center gap-4">
                          <p className="text-base font-medium text-foreground">
                            {formatConverted(item.price * item.quantity)}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground/50 hover:text-destructive transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Summary - 1/3 */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-md border border-border bg-card p-6 space-y-6">
              <h2 className="font-serif text-lg text-foreground">
                Order Summary
              </h2>

              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">
                    Subtotal ({items.length}{" "}
                    {items.length === 1 ? "item" : "items"})
                  </dt>
                  <dd className="text-foreground">{formatConverted(subtotal())}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Shipping</dt>
                  <dd className="text-foreground">
                    {shippingCost === 0 ? (
                      <span className="text-jade font-medium">
                        Complimentary
                      </span>
                    ) : (
                      formatConverted(shippingCost)
                    )}
                  </dd>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <dt className="font-medium text-foreground">Total</dt>
                  <dd className="font-medium text-foreground text-lg">
                    {formatConverted(total)}
                  </dd>
                </div>
              </dl>

              <Link
                href="/checkout"
                className="block w-full text-center rounded-md bg-foreground text-background py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Proceed to Checkout
              </Link>

              {/* Trust Signals */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Truck className="h-3.5 w-3.5 shrink-0" />
                  <span>
                    Free shipping over{" "}
                    {formatConverted(siteConfig.shipping.freeShippingThreshold)}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3.5 w-3.5 shrink-0" />
                  <span>Authenticity certificate included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
