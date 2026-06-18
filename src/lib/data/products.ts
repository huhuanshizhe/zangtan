export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  category: string;
  materials: string[];
}

export const allProducts: Product[] = [
  {
    id: "1",
    slug: "crimson-peony-khaden",
    name: "Crimson Peony Khaden",
    subtitle: "A garden of peonies knotted in highland wool",
    price: 2800,
    image: "/images/products/khaden-crimson.png",
    category: "khaden",
    materials: ["Hand-spun wool", "Cotton warp"],
  },
  {
    id: "2",
    slug: "indigo-dragon-runner",
    name: "Indigo Dragon Runner",
    subtitle: "Celestial dragons on a field of deep indigo",
    price: 3400,
    image: "/images/products/temple-dragon.png",
    category: "temple-rugs",
    materials: ["Highland wool", "Cotton warp"],
  },
  {
    id: "3",
    slug: "saffron-meditation-mat",
    name: "Saffron Meditation Mat",
    subtitle: "Warm tones for a place of stillness",
    price: 1600,
    image: "/images/products/lifestyle-meditation.png",
    category: "khaden",
    materials: ["Hand-spun wool"],
  },
  {
    id: "4",
    slug: "phoenix-cloud-khaden",
    name: "Phoenix & Cloud Khaden",
    subtitle: "Phoenixes floating among wispy clouds",
    price: 3200,
    image: "/images/products/lifestyle-bedroom.png",
    category: "khaden",
    materials: ["Highland wool", "Cotton warp"],
  },
  {
    id: "5",
    slug: "lotus-medallion-cushion",
    name: "Lotus Medallion Cushion Cover",
    subtitle: "Enlightenment symbol in intricate medallion form",
    price: 680,
    image: "/images/products/cushion-lotus.png",
    category: "cushions",
    materials: ["Hand-spun wool"],
  },
  {
    id: "6",
    slug: "tiger-stripe-saddle-rug",
    name: "Tiger Stripe Saddle Rug",
    subtitle: "Spirit of the tiger woven into equestrian textile",
    price: 2400,
    image: "/images/products/saddle-tiger.png",
    category: "saddle-rugs",
    materials: ["Highland wool", "Yak hair"],
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return allProducts.filter((p) => p.category === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}
