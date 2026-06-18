import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ProductPrice } from "@/components/storefront/ProductPrice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Collection",
  description: "Browse our curated collection of authentic handwoven Tibetan carpets — khaden, temple rugs, saddle rugs, cushions, and decorative textiles.",
};

// Placeholder data
const allProducts = [
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

export default function CollectionPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            The Full Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">
            Our Carpets
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Each piece is handwoven on the Tibetan plateau using highland wool
            and the traditional Tibetan knot. No two rugs are alike.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Link
            href="/collection"
            className="rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium transition-colors"
          >
            All
          </Link>
          {siteConfig.categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collection/${cat.slug}`}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Sort Bar */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-muted-foreground">
            {allProducts.length} pieces
          </p>
          <select className="text-sm text-muted-foreground bg-transparent border border-border rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-ring">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase tracking-wider bg-background/90 backdrop-blur-sm px-2 py-1 rounded-sm text-muted-foreground">
                    {product.category.replace("-", " ")}
                  </span>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {product.subtitle}
                </p>
                <div className="flex items-center justify-between pt-1">
                  <ProductPrice
                    price={product.price}
                    className="text-sm font-medium text-foreground"
                  />
                  <p className="text-xs text-muted-foreground">
                    {product.materials[0]}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
