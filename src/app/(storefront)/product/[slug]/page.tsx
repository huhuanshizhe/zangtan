import Link from "next/link";
import { Heart, Truck, Shield } from "lucide-react";
import { AddToCartButton } from "@/components/storefront/AddToCartButton";
import { ProductPrice } from "@/components/storefront/ProductPrice";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

// This would be fetched from DB in production
const product = {
  id: "1",
  slug: "crimson-peony-khaden",
  name: "Crimson Peony Khaden",
  subtitle: "A garden of peonies knotted in highland wool",
  description:
    "This khaden — the Tibetan sitting rug — invites the body to stay. It can be placed in a reading corner, tea room, meditation space, window platform, or any place where one wishes to slow down and dwell. The peony motifs, adapted from Chinese silk brocades and reimagined through Tibetan eyes, express wishes for abundance and beauty in the home.",
  story:
    "The khaden is one of the most intimate forms of Tibetan textile. Unlike a conventional rug that mainly supports footsteps or frames furniture, a khaden invites the body to rest. Traditionally placed on the kang platform of Tibetan homes, it was where families gathered, guests were received, and quiet moments were spent.\n\nThis particular piece was woven in the Gyantse tradition, where the craft has been practiced for centuries. The weaver worked knot by knot over more than a month, then carefully trimmed the surface so that the peony motifs emerged with clarity and depth. The crimson field is achieved through natural dyeing techniques using madder root, a practice that gives the wool a living, breathing quality that synthetic dyes cannot replicate.",
  price: 2800,
  images: [
    {
      url: "/images/products/khaden-crimson.png",
      alt: "Crimson Peony Khaden - full view",
      type: "photo",
    },
    {
      url: "/images/story/story-dyeing.png",
      alt: "Natural dyeing process detail",
      type: "detail",
    },
    {
      url: "/images/products/lifestyle-bedroom.png",
      alt: "Khaden in living space",
      type: "lifestyle",
    },
  ],
  details: {
    dimensions: "170 × 90 cm (67 × 35 in)",
    materials: "Hand-spun highland wool pile, cotton warp and weft",
    knotDensity: "Approx. 1,200 knots per sq. decimeter",
    dyeMethod: "Natural dyes — madder root (crimson), indigo (blue), walnut (brown)",
    origin: "Gyantse, Tibet",
    artisan: "Traditional workshop",
    condition: "New, handwoven",
    agePeriod: "Contemporary",
  },
  category: "Khaden",
  weightGrams: 3500,
};

export async function generateMetadata(): Promise<Metadata> {
  // In production, fetch product from DB using params.slug
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.images[0].url }],
    },
  };
}

export default function ProductDetailPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((i) => i.url),
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "Woven Plateau",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/product/${product.slug}`,
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Dimensions", value: product.details.dimensions },
      { "@type": "PropertyValue", name: "Materials", value: product.details.materials },
      { "@type": "PropertyValue", name: "Origin", value: product.details.origin },
      { "@type": "PropertyValue", name: "Knot Density", value: product.details.knotDensity },
    ],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/collection" className="hover:text-foreground transition-colors">
            Collection
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.category}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Image Gallery - 60% */}
          <div className="lg:col-span-3 space-y-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary">
              <img
                src={product.images[0].url}
                alt={product.images[0].alt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.slice(1).map((img, i) => (
                <button
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-sm bg-secondary border-2 border-transparent hover:border-primary transition-colors"
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
              {/* Add extra slot for more images */}
              <div className="relative aspect-square overflow-hidden rounded-sm bg-secondary flex items-center justify-center text-muted-foreground text-sm">
                +{product.images.length - 2} more
              </div>
            </div>
          </div>

          {/* Product Info - 40% */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {product.category}
              </p>
              <h1 className="font-serif text-3xl lg:text-4xl text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {product.subtitle}
              </p>

              <ProductPrice price={product.price} />

              {/* Add to Cart */}
              <div className="space-y-3 mb-8">
                <AddToCartButton
                  product={{
                    id: product.id,
                    slug: product.slug,
                    name: product.name,
                    price: product.price,
                    image: product.images[0].url,
                    category: product.category,
                  }}
                />
                <button className="w-full flex items-center justify-center gap-2 rounded-md border border-border py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                  <Heart className="h-4 w-4" />
                  Save to Wishlist
                </button>
              </div>

              {/* Key Info */}
              <div className="space-y-4 border-t border-border pt-6">
                <div className="flex items-start gap-3">
                  <Truck className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Worldwide Shipping
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Free shipping on orders over $500. Estimated delivery 7-14 days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Authenticity Guaranteed
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Each piece comes with a certificate of authenticity and origin.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Details */}
              <div className="mt-8 border-t border-border pt-6 space-y-3">
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Details
                </h3>
                <dl className="space-y-2">
                  <DetailRow label="Dimensions" value={product.details.dimensions} />
                  <DetailRow label="Materials" value={product.details.materials} />
                  <DetailRow label="Knot Density" value={product.details.knotDensity} />
                  <DetailRow label="Origin" value={product.details.origin} />
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <section className="mt-24 lg:mt-32 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              The Story
            </p>
            <h2 className="font-serif text-3xl text-foreground">
              Behind This Piece
            </h2>
          </div>
          <div className="prose prose-neutral max-w-none">
            {product.story.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Full Details Accordion */}
        <section className="mt-16 max-w-3xl mx-auto border-t border-border pt-12">
          <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Full Specifications
          </h3>
          <dl className="divide-y divide-border">
            <FullDetailRow label="Dimensions" value={product.details.dimensions} />
            <FullDetailRow label="Materials" value={product.details.materials} />
            <FullDetailRow label="Knot Density" value={product.details.knotDensity} />
            <FullDetailRow label="Dye Method" value={product.details.dyeMethod} />
            <FullDetailRow label="Origin" value={product.details.origin} />
            <FullDetailRow label="Artisan" value={product.details.artisan} />
            <FullDetailRow label="Condition" value={product.details.condition} />
            <FullDetailRow label="Period" value={product.details.agePeriod} />
            <FullDetailRow label="Weight" value={`${(product.weightGrams / 1000).toFixed(1)} kg`} />
          </dl>
        </section>

        {/* Related Products */}
        <section className="mt-24 lg:mt-32 border-t border-border pt-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl text-foreground">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Saffron Meditation Mat", price: 1600, slug: "saffron-meditation-mat" },
              { name: "Phoenix & Cloud Khaden", price: 3200, slug: "phoenix-cloud-khaden" },
              { name: "Lotus Medallion Cushion", price: 680, slug: "lotus-medallion-cushion" },
            ].map((p) => (
              <Link key={p.slug} href={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-secondary mb-3" />
                <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  ${p.price.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-foreground text-right max-w-[60%]">{value}</dd>
    </div>
  );
}

function FullDetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-3 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-foreground text-right">{value}</dd>
    </div>
  );
}
