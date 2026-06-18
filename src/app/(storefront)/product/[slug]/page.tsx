import Link from "next/link";
import { notFound } from "next/navigation";
import { Heart, Truck, Shield } from "lucide-react";
import { AddToCartButton } from "@/components/storefront/AddToCartButton";
import { ProductPrice } from "@/components/storefront/ProductPrice";
import { getProductBySlug, allProducts } from "@/lib/data/products";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const productDetailsMap: Record<string, {
  description: string;
  story: string;
  details: {
    dimensions: string;
    materials: string;
    knotDensity: string;
    dyeMethod: string;
    origin: string;
    artisan: string;
    condition: string;
    agePeriod: string;
  };
  weightGrams: number;
  images: { url: string; alt: string; type: string }[];
}> = {
  "crimson-peony-khaden": {
    description:
      "This khaden — the Tibetan sitting rug — invites the body to stay. It can be placed in a reading corner, tea room, meditation space, window platform, or any place where one wishes to slow down and dwell. The peony motifs, adapted from Chinese silk brocades and reimagined through Tibetan eyes, express wishes for abundance and beauty in the home.",
    story:
      "The khaden is one of the most intimate forms of Tibetan textile. Unlike a conventional rug that mainly supports footsteps or frames furniture, a khaden invites the body to rest. Traditionally placed on the kang platform of Tibetan homes, it was where families gathered, guests were received, and quiet moments were spent.\n\nThis particular piece was woven in the Gyantse tradition, where the craft has been practiced for centuries. The weaver worked knot by knot over more than a month, then carefully trimmed the surface so that the peony motifs emerged with clarity and depth. The crimson field is achieved through natural dyeing techniques using madder root, a practice that gives the wool a living, breathing quality that synthetic dyes cannot replicate.",
    images: [
      { url: "/images/products/khaden-crimson.png", alt: "Crimson Peony Khaden - full view", type: "photo" },
      { url: "/images/story/story-dyeing.png", alt: "Natural dyeing process detail", type: "detail" },
      { url: "/images/products/lifestyle-bedroom.png", alt: "Khaden in living space", type: "lifestyle" },
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
    weightGrams: 3500,
  },
  "indigo-dragon-runner": {
    description:
      "A temple runner woven with celestial dragons against a field of deep indigo. Originally designed to line monastery halls and mark seating positions for monks, this runner carries the solemn beauty of Tibetan Buddhist spaces into the contemporary home. The dragon — symbol of power and the celestial realm — is rendered with a rhythmic energy that brings the textile alive.",
    story:
      "Temple runners have a distinct history in Tibetan culture. In monastery assembly halls, long narrow rugs were placed in rows to define where monks would sit during prayers and ceremonies. The dragons woven into this piece are not merely decorative — they are protective symbols, guardians of sacred space.\n\nThis runner was woven on a vertical loom using the traditional Tibetan knot. The indigo dye was prepared from natural sources, steeped and fermented over weeks to achieve its deep, luminous blue. Each knot was tied by hand, a meditation in itself, over the span of nearly two months.",
    images: [
      { url: "/images/products/temple-dragon.png", alt: "Indigo Dragon Runner - full view", type: "photo" },
      { url: "/images/story/story-artisan.png", alt: "Artisan weaving detail", type: "detail" },
      { url: "/images/products/lifestyle-meditation.png", alt: "Runner in meditation space", type: "lifestyle" },
    ],
    details: {
      dimensions: "240 × 75 cm (94 × 30 in)",
      materials: "Highland wool pile, cotton warp and weft",
      knotDensity: "Approx. 1,100 knots per sq. decimeter",
      dyeMethod: "Natural dyes — indigo (blue), madder (red accents)",
      origin: "Gyantse, Tibet",
      artisan: "Traditional monastery workshop",
      condition: "New, handwoven",
      agePeriod: "Contemporary",
    },
    weightGrams: 4200,
  },
  "tiger-stripe-saddle-rug": {
    description:
      "A saddle rug woven with tiger-stripe motifs, rooted in the equestrian traditions of the Tibetan plateau. The tiger — symbol of spiritual achievement and fearlessness — is abstracted into bold, rhythmic stripes that convey power and movement. Historically used to adorn horses during festivals and journeys, this piece brings nomadic heritage into the modern home.",
    story:
      "Saddle rugs, known as Tamden in Tibetan, are among the most vibrant expressions of nomadic textile art. Woven to fit beneath the saddle, they were both practical — protecting the horse — and ceremonial, displaying the rider's status and taste. The tiger stripe pattern is especially significant, drawing on the tiger's role as a symbol of spiritual accomplishment in Tibetan Buddhism.\n\nThis piece was woven using highland wool blended with yak hair for extra durability. The earthy browns and golds come from walnut and local plant dyes, giving the rug a warmth that synthetic colors cannot match. Each stripe carries the rhythm of the weaver's hand, making this a truly one-of-a-kind textile.",
    images: [
      { url: "/images/products/saddle-tiger.png", alt: "Tiger Stripe Saddle Rug - full view", type: "photo" },
      { url: "/images/story/story-plateau.png", alt: "Tibetan plateau landscape", type: "context" },
      { url: "/images/story/story-artisan.png", alt: "Weaving detail", type: "detail" },
    ],
    details: {
      dimensions: "130 × 65 cm (51 × 26 in)",
      materials: "Highland wool and yak hair pile, cotton warp",
      knotDensity: "Approx. 900 knots per sq. decimeter",
      dyeMethod: "Natural dyes — walnut (brown), local plant dyes (gold)",
      origin: "Nagchu, Tibet",
      artisan: "Nomadic weaving collective",
      condition: "New, handwoven",
      agePeriod: "Contemporary",
    },
    weightGrams: 2800,
  },
  "lotus-medallion-cushion": {
    description:
      "A cushion cover centered on the lotus medallion — one of the most sacred symbols in Tibetan Buddhism, representing enlightenment rising from the mud. Woven in a rich palette of saffron, crimson, and deep blue, this piece brings a quiet, contemplative presence to any seating area.",
    story:
      "The lotus holds profound meaning across Buddhist cultures. Rooted in mud, it rises through water to bloom pristine above the surface — a metaphor for the spiritual journey toward enlightenment. In Tibetan homes and monasteries, lotus motifs appear on textiles, thangkas, and architectural details as reminders of this aspiration.\n\nThis cushion cover was woven in a small workshop where the craft has been passed down through generations. The weaver worked the traditional Tibetan knot, carefully shaping each petal of the lotus medallion. The colors were achieved through natural dyeing: madder root for the crimson, indigo for the blue, and local plants for the saffron tones.",
    images: [
      { url: "/images/products/cushion-lotus.png", alt: "Lotus Medallion Cushion - full view", type: "photo" },
      { url: "/images/story/story-dyeing.png", alt: "Natural dyeing detail", type: "detail" },
      { url: "/images/products/lifestyle-bedroom.png", alt: "Cushion in living space", type: "lifestyle" },
    ],
    details: {
      dimensions: "50 × 50 cm (20 × 20 in)",
      materials: "Hand-spun highland wool pile, cotton backing",
      knotDensity: "Approx. 800 knots per sq. decimeter",
      dyeMethod: "Natural dyes — madder, indigo, local plant dyes",
      origin: "Gyantse, Tibet",
      artisan: "Family workshop",
      condition: "New, handwoven",
      agePeriod: "Contemporary",
    },
    weightGrams: 800,
  },
  "saffron-meditation-mat": {
    description:
      "A smaller-format khaden in warm saffron and earth tones, sized perfectly for a meditation space, window seat, or reading nook. The design is intentionally understated — a quiet field of warm color with subtle border work — allowing the texture of the hand-spun wool to take center stage.",
    story:
      "This meditation mat was conceived as a 'place of stillness' — a textile that marks a boundary between the everyday and the contemplative. In Tibetan culture, sitting on the ground or on a low platform is the natural posture for rest, conversation, and spiritual practice. A khaden defines that space with warmth and intention.\n\nThe saffron tones were achieved through a blend of natural dyes, developed through experimentation by the dyer. The wool was hand-spun by women in a high-altitude community, their skill evident in the subtle variations of thickness that give the surface its living texture. Woven over three weeks on a vertical loom, this piece embodies the slow, deliberate pace of true handcraft.",
    images: [
      { url: "/images/products/lifestyle-meditation.png", alt: "Saffron Meditation Mat - full view", type: "photo" },
      { url: "/images/story/story-artisan.png", alt: "Hand-spinning detail", type: "detail" },
      { url: "/images/story/story-plateau.png", alt: "Highland context", type: "context" },
    ],
    details: {
      dimensions: "120 × 80 cm (47 × 31 in)",
      materials: "Hand-spun highland wool pile, cotton warp",
      knotDensity: "Approx. 1,000 knots per sq. decimeter",
      dyeMethod: "Natural dyes — saffron, walnut, local plant dyes",
      origin: "Shigatse, Tibet",
      artisan: "Women's weaving cooperative",
      condition: "New, handwoven",
      agePeriod: "Contemporary",
    },
    weightGrams: 2200,
  },
  "phoenix-cloud-khaden": {
    description:
      "A khaden featuring phoenixes floating among stylized cloud motifs, rendered in a palette of deep blue, warm coral, and cream. The phoenix — symbol of grace, renewal, and the union of opposites — is a recurring motif in Tibetan textiles, adapted from Chinese silk traditions and given new life through the Tibetan weaver's eye.",
    story:
      "The phoenix, or Fenghuang, traveled the Silk Road from Chinese visual culture into Tibetan textile tradition. In Tibetan interpretation, it carries additional layers of meaning — the union of masculine and feminine principles, the harmony of sun and moon, and the promise of renewal after hardship.\n\nThis khaden was woven in a traditional workshop near Gyantse, where the craft of Tibetan carpet weaving has flourished for centuries. The weaver used a combination of highland wool for the pile and cotton for the foundation, tying each knot individually over more than five weeks. The coral tones were achieved through careful madder dyeing, while the deep blue background required multiple indigo dips to reach its final depth.",
    images: [
      { url: "/images/products/lifestyle-bedroom.png", alt: "Phoenix & Cloud Khaden - full view", type: "photo" },
      { url: "/images/story/story-artisan.png", alt: "Weaving process", type: "detail" },
      { url: "/images/story/story-dyeing.png", alt: "Dyeing detail", type: "detail" },
    ],
    details: {
      dimensions: "180 × 95 cm (71 × 37 in)",
      materials: "Highland wool pile, cotton warp and weft",
      knotDensity: "Approx. 1,200 knots per sq. decimeter",
      dyeMethod: "Natural dyes — indigo (blue), madder (coral), undyed cream wool",
      origin: "Gyantse, Tibet",
      artisan: "Traditional workshop",
      condition: "New, handwoven",
      agePeriod: "Contemporary",
    },
    weightGrams: 3800,
  },
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.subtitle,
    openGraph: {
      title: product.name,
      description: product.subtitle,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  
  const details = productDetailsMap[slug] ?? productDetailsMap["crimson-peony-khaden"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: details.description,
    image: details.images.map((i) => i.url),
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
      { "@type": "PropertyValue", name: "Dimensions", value: details.details.dimensions },
      { "@type": "PropertyValue", name: "Materials", value: details.details.materials },
      { "@type": "PropertyValue", name: "Origin", value: details.details.origin },
      { "@type": "PropertyValue", name: "Knot Density", value: details.details.knotDensity },
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
                src={details.images[0].url}
                alt={details.images[0].alt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {details.images.slice(1).map((img, i) => (
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
                +{details.images.length - 2} more
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
                    image: details.images[0].url,
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
                  <DetailRow label="Dimensions" value={details.details.dimensions} />
                  <DetailRow label="Materials" value={details.details.materials} />
                  <DetailRow label="Knot Density" value={details.details.knotDensity} />
                  <DetailRow label="Origin" value={details.details.origin} />
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
            {details.story.split("\n\n").map((paragraph, i) => (
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
            <FullDetailRow label="Dimensions" value={details.details.dimensions} />
            <FullDetailRow label="Materials" value={details.details.materials} />
            <FullDetailRow label="Knot Density" value={details.details.knotDensity} />
            <FullDetailRow label="Dye Method" value={details.details.dyeMethod} />
            <FullDetailRow label="Origin" value={details.details.origin} />
            <FullDetailRow label="Artisan" value={details.details.artisan} />
            <FullDetailRow label="Condition" value={details.details.condition} />
            <FullDetailRow label="Period" value={details.details.agePeriod} />
            <FullDetailRow label="Weight" value={`${(details.weightGrams / 1000).toFixed(1)} kg`} />
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
