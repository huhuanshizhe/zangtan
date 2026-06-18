"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrencyStore } from "@/stores/currency";
import { siteConfig } from "@/config/site";

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrencyStore();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const currentCurrency = siteConfig.currencies.find(
    (c) => c.code === currency
  );

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Select currency"
      >
        <Globe className="h-4 w-4" />
        <span className="text-xs font-medium">
          {currentCurrency?.code ?? "USD"}
        </span>
        <ChevronDown className="h-3 w-3" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-44 rounded-md bg-popover border border-border shadow-lg overflow-hidden z-50"
          >
            <div className="py-1">
              {siteConfig.currencies.map((c) => (
                <button
                  key={c.code}
                  onClick={() => {
                    setCurrency(c.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors ${
                    c.code === currency
                      ? "bg-secondary text-foreground font-medium"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base">{c.symbol}</span>
                    <span>{c.code}</span>
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {c.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
