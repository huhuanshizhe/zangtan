"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useCartStore } from "@/stores/cart";
import { useCurrencyStore } from "@/stores/currency";
import { fetchExchangeRates } from "@/lib/currency/rates";
import { CurrencySelector } from "@/components/storefront/CurrencySelector";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());
  const toggleCart = useCartStore((s) => s.toggleCart);
  const setRates = useCurrencyStore((s) => s.setRates);

  // Fetch exchange rates on mount
  useEffect(() => {
    fetchExchangeRates().then(setRates);
  }, [setRates]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-serif text-2xl font-semibold tracking-widest text-foreground"
          >
            <img src="/images/logo/logo-mark.png" alt="" className="h-7 w-7 object-contain" />
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <CurrencySelector />
            <button
              onClick={toggleCart}
              className="relative text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-6 space-y-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-lg font-medium text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <button
                onClick={() => {
                  toggleCart();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <ShoppingBag className="h-4 w-4" />
                <span className="text-sm">
                  Bag {totalItems > 0 && `(${totalItems})`}
                </span>
              </button>
              <CurrencySelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
