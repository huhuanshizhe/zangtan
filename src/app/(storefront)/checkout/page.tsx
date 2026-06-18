"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Shield, Lock } from "lucide-react";
import { useCartStore } from "@/stores/cart";
import { useCurrencyStore } from "@/stores/currency";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal } = useCartStore();
  const { currency } = useCurrencyStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      router.replace("/cart");
    }
  }, [items.length, router]);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          })),
          currency,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Checkout failed");
      }

      const { url } = await res.json();
      if (url) {
        window.location.href = url;
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      setLoading(false);
    }
  }

  if (items.length === 0) return null;

  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-xl px-6 text-center">
        <Lock className="h-8 w-8 text-muted-foreground/30 mx-auto mb-6" />
        <h1 className="font-serif text-3xl text-foreground mb-3">
          Secure Checkout
        </h1>
        <p className="text-muted-foreground mb-8">
          You&apos;ll be redirected to Stripe for secure payment. We accept all
          major credit cards.
        </p>

        {/* Order Summary */}
        <div className="rounded-md border border-border bg-card p-6 text-left mb-8">
          <h2 className="font-serif text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Order Summary
          </h2>
          <div className="divide-y divide-border">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between py-2 text-sm">
                <span className="text-foreground">
                  {item.name} x{item.quantity}
                </span>
                <span className="text-muted-foreground">
                  ${(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-border mt-3 pt-3 flex justify-between text-sm font-medium">
            <span className="text-foreground">Total</span>
            <span className="text-foreground">
              ${subtotal().toLocaleString()} USD
            </span>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-md bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-md bg-foreground text-background py-4 text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Redirecting to Stripe...
            </>
          ) : (
            <>
              <Lock className="h-4 w-4" />
              Pay Securely with Stripe
            </>
          )}
        </button>

        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Shield className="h-3 w-3" />
            SSL Encrypted
          </span>
          <span>Powered by Stripe</span>
        </div>
      </div>
    </div>
  );
}
