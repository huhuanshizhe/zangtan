import { create } from "zustand";
import { siteConfig } from "@/config/site";

type CurrencyCode = (typeof siteConfig.currencies)[number]["code"];

interface CurrencyState {
  currency: CurrencyCode;
  rates: Record<string, number>;
  setCurrency: (code: CurrencyCode) => void;
  setRates: (rates: Record<string, number>) => void;
  convert: (usdAmount: number) => number;
  formatConverted: (usdAmount: number) => string;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

const defaultRates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.5,
  AUD: 1.53,
  CAD: 1.36,
};

const initialCurrency =
  (typeof document !== "undefined" && (getCookie("currency") as CurrencyCode)) || "USD";

export const useCurrencyStore = create<CurrencyState>()((set, get) => ({
  currency: initialCurrency,
  rates: defaultRates,

  setCurrency: (code) => {
    setCookie("currency", code);
    set({ currency: code });
  },

  setRates: (rates) => set({ rates }),

  convert: (usdAmount) => {
    const { currency, rates } = get();
    const rate = rates[currency] ?? 1;
    return Math.round(usdAmount * rate * 100) / 100;
  },

  formatConverted: (usdAmount) => {
    const { currency, rates } = get();
    const rate = rates[currency] ?? 1;
    const converted = usdAmount * rate;
    const currencyConfig = siteConfig.currencies.find(
      (c) => c.code === currency
    );
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: currency === "JPY" ? 0 : 2,
      maximumFractionDigits: currency === "JPY" ? 0 : 2,
    }).format(converted);
  },
}));
