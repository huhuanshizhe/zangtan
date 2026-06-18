import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ProductPrice } from "@/components/storefront/ProductPrice";

const featuredProducts = [
  {
    id: "1",
    slug: "crimson-peony-khaden",
    name: "Crimson Peony Khaden",
    subtitle: "A garden of peonies knotted in highland wool",
    price: 2800,
    image: "/images/products/khaden-crimson.png",
    category: "Khaden",
  },
  {
    id: "2",
    slug: "indigo-dragon-runner",
    name: "Indigo Dragon Runner",
    subtitle: "Celestial dragons woven on a field of deep indigo",
    price: 3400,
    image: "/images/products/temple-dragon.png",
    category: "Temple Rugs",
  },
  {
    id: "3",
    slug: "saffron-meditation-mat",
    name: "Saffron Meditation Mat",
    subtitle: "Warm tones for a place of stillness",
    price: 1600,
    image: "/images/products/lifestyle-meditation.png",
    category: "Khaden",
  },
];

const storyHighlights = [
  {
    title: "Highland Wool",
    text: "Sourced from sheep grazing above 4,000 meters on the Tibetan plateau — longer, stronger, and more resilient than lowland fibers.",
  },
  {
    title: "Hand-Knotted",
    text: "Each carpet is woven on a vertical loom using the traditional Tibetan knot, a technique that takes over a month to complete.",
  },
  {
    title: "Living Patterns",
    text: "Dragons, phoenixes, lotus blossoms, and auspicious symbols — visual expressions of wishes for peace, abundance, and a good life.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section className="relative h-[90vh] min-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero/hero-living.png)" }}
        />
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 pb-20 w-full">
          <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">
            Handwoven Tibetan Carpets
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] max-w-3xl">
            {siteConfig.heroTagline}
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl font-light leading-relaxed">
            {siteConfig.tagline} Each piece is a unique work of art — woven from
            highland wool using techniques passed down through generations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3.5 text-sm font-medium text-foreground hover:bg-white/90 transition-colors"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/story"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              The Story
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Curated Collection ===== */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Curated Selection
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Featured Pieces
              </h2>
            </div>
            <Link
              href="/collection"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View All
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
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
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="font-serif text-lg text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {product.subtitle}
                  </p>
                  <ProductPrice
                    price={product.price}
                    className="text-sm font-medium text-foreground pt-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== The Story Section ===== */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                A Thousand-Year Tradition
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Not a rug to look at,
                <br />
                but a textile to live with
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Tibetan carpet is more than a decorative textile. It belongs to
                a wider tradition in which wool, handwork, domestic life, Buddhist
                visual culture, and bodily experience are closely connected.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Tibetan rugs have appeared in temples, homes, monastic halls,
                tents, and on horseback. They were used for sitting, sleeping,
                praying, receiving guests, and creating places of stillness.
              </p>
              <Link
                href="/story"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all"
              >
                Read the full story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-6">
              {storyHighlights.map((item, i) => (
                <div
                  key={i}
                  className="border-l-2 border-primary/30 pl-6 py-2"
                >
                  <h3 className="font-serif text-lg text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Categories ===== */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Browse by Type
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              The Collection
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {siteConfig.categories.map((cat, i) => {
              const categoryImages = [
                "/images/products/khaden-crimson.png",
                "/images/products/temple-dragon.png",
                "/images/products/saddle-tiger.png",
                "/images/products/cushion-lotus.png",
                "/images/products/lifestyle-bedroom.png",
              ];
              return (
                <Link
                  key={cat.slug}
                  href={`/collection/${cat.slug}`}
                  className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary"
                >
                  <img
                    src={categoryImages[i]}
                    alt={cat.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent z-10" />
                  <div className="relative z-20 h-full flex flex-col justify-end p-4">
                    <h3 className="font-serif text-lg text-white">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-white/70 mt-1 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Reference Gallery ===== */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              From the Workshop
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              A Glimpse into the Craft
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Behind every carpet is a world of handwork — spinning, dyeing, knotting, trimming.
              These are the hands and materials that bring Woven Plateau to life.
            </p>
          </div>

          {/* Bento-style curated gallery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
            {/* Row 1: Featured large + 2 small */}
            <div className="md:col-span-7 aspect-[16/10] overflow-hidden rounded-sm bg-secondary group">
              <img
                src="/images/reference/微信图片_20260617161732_20_2297.jpg"
                alt="Artisan weaving on a traditional vertical loom"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-5 grid grid-rows-2 gap-3 md:gap-4">
              <div className="aspect-[16/9] overflow-hidden rounded-sm bg-secondary group">
                <img
                  src="/images/reference/微信图片_20260617161715_14_2297.jpg"
                  alt="Close-up of hand-knotting technique"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[16/9] overflow-hidden rounded-sm bg-secondary group">
                <img
                  src="/images/reference/微信图片_20260617161737_22_2297.jpg"
                  alt="Naturally dyed wool yarns in vibrant colors"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Row 2: 3 equal */}
            <div className="md:col-span-4 aspect-[4/3] overflow-hidden rounded-sm bg-secondary group">
              <img
                src="/images/reference/微信图片_20260617161735_21_2297.jpg"
                alt="Preparing highland wool for spinning"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-4 aspect-[4/3] overflow-hidden rounded-sm bg-secondary group">
              <img
                src="/images/reference/微信图片_20260617161720_16_2297.jpg"
                alt="Traditional Tibetan carpet patterns with dragon and phoenix motifs"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-4 aspect-[4/3] overflow-hidden rounded-sm bg-secondary group">
              <img
                src="/images/reference/微信图片_20260617161724_18_2297.jpg"
                alt="Antique Tibetan carpet detail showing intricate knotting"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            {/* Row 3: 2 wide */}
            <div className="md:col-span-7 aspect-[16/9] overflow-hidden rounded-sm bg-secondary group">
              <img
                src="/images/reference/微信图片_20260617161722_17_2297.jpg"
                alt="Finished Tibetan carpet in a traditional household setting"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-5 aspect-[16/9] overflow-hidden rounded-sm bg-secondary group">
              <img
                src="/images/reference/微信图片_20260617161726_19_2297.jpg"
                alt="Dragon and phoenix motif detail on a traditional Tibetan carpet"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/story/craftsmanship"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Discover the full process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Promise Section ===== */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-lg text-foreground mb-1">
                Authentic & Handmade
              </p>
              <p className="text-sm text-muted-foreground">
                Every piece is woven by hand on the Tibetan plateau
              </p>
            </div>
            <div>
              <p className="font-serif text-lg text-foreground mb-1">
                Worldwide Shipping
              </p>
              <p className="text-sm text-muted-foreground">
                Free shipping on orders over ${siteConfig.shipping.freeShippingThreshold}
              </p>
            </div>
            <div>
              <p className="font-serif text-lg text-foreground mb-1">
                One of a Kind
              </p>
              <p className="text-sm text-muted-foreground">
                No two rugs are alike — each is a unique creation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
