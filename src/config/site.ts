export const siteConfig = {
  name: "WOVEN PLATEAU",
  description: "Authentic handwoven Tibetan carpets from the roof of the world",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wovenplateau.com",
  tagline: "A rug to live on, not just walk on.",
  heroTagline: "Woven by hand on the Tibetan plateau",
  
  nav: [
    { title: "Collection", href: "/collection" },
    { title: "Story", href: "/story" },
    { title: "Journal", href: "/journal" },
    { title: "About", href: "/about" },
  ],

  categories: [
    { name: "Khaden", slug: "khaden", description: "Body-scale sitting and reclining textiles" },
    { name: "Temple Rugs", slug: "temple-rugs", description: "Monastic runners and ceremonial carpets" },
    { name: "Saddle Rugs", slug: "saddle-rugs", description: "Equestrian textiles for horseback" },
    { name: "Cushions", slug: "cushions", description: "Decorative and functional cushion covers" },
    { name: "Decorative", slug: "decorative", description: "Door curtains, column rugs, and wall textiles" },
  ],

  currencies: [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "JPY", symbol: "¥", name: "Japanese Yen" },
    { code: "AUD", symbol: "A$", name: "Australian Dollar" },
    { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  ],

  shipping: {
    freeShippingThreshold: 500, // USD
    estimatedDelivery: "7-14 business days",
  },
} as const

export type SiteConfig = typeof siteConfig
