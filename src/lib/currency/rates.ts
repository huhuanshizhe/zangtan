/**
 * Exchange rate fetching and caching
 * Uses Open Exchange Rates API (free tier: 1000 req/mo)
 * Falls back to hardcoded rates if API fails
 */

const CACHE_KEY = "zangtan_exchange_rates";
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

interface CachedRates {
  rates: Record<string, number>;
  timestamp: number;
}

const fallbackRates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.5,
  AUD: 1.53,
  CAD: 1.36,
};

function getCachedRates(): CachedRates | null {
  if (typeof window === "undefined") return null;
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    const parsed = JSON.parse(cached) as CachedRates;
    if (Date.now() - parsed.timestamp > CACHE_TTL) return null;
    return parsed;
  } catch {
    return null;
  }
}

function setCachedRates(rates: Record<string, number>) {
  if (typeof window === "undefined") return;
  const data: CachedRates = { rates, timestamp: Date.now() };
  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
}

/**
 * Fetch exchange rates from API.
 * Returns cached rates if available and fresh.
 * Falls back to hardcoded rates on failure.
 */
export async function fetchExchangeRates(): Promise<Record<string, number>> {
  // Check cache first
  const cached = getCachedRates();
  if (cached) return cached.rates;

  try {
    // Using free API: https://open.er-api.com/v6/latest/USD
    const res = await fetch("https://open.er-api.com/v6/latest/USD", {
      next: { revalidate: 86400 }, // ISR: revalidate daily
    });

    if (!res.ok) throw new Error("Failed to fetch rates");

    const data = await res.json();
    const rates: Record<string, number> = { USD: 1 };

    // Extract only the currencies we support
    const supported = ["EUR", "GBP", "JPY", "AUD", "CAD"];
    for (const code of supported) {
      if (data.rates?.[code]) {
        rates[code] = data.rates[code];
      }
    }

    setCachedRates(rates);
    return rates;
  } catch {
    // Silently fall back to hardcoded rates
    return fallbackRates;
  }
}

/**
 * Server-side rate fetch (for API routes / server components)
 */
export async function getServerRates(): Promise<Record<string, number>> {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD", {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return fallbackRates;
    const data = await res.json();
    const rates: Record<string, number> = { USD: 1 };
    const supported = ["EUR", "GBP", "JPY", "AUD", "CAD"];
    for (const code of supported) {
      if (data.rates?.[code]) rates[code] = data.rates[code];
    }
    return rates;
  } catch {
    return fallbackRates;
  }
}
