import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { allProducts, getProductsByCategory } from "@/lib/data/products";
import { ProductPrice } from "@/components/storefront/ProductPrice";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = siteConfig.categories.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category.name} — Woven Plateau`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = siteConfig.categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);

  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/collection" className="hover:text-foreground transition-colors">
            Collection
          </Link>
          <span>/</span>
          <span className="text-foreground">{category.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Category
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">
            {category.name}
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            {category.description}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          <Link
            href="/collection"
            className="rounded-full border border-border px-5 py-2 text-sm font-medium text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
          >
            All
          </Link>
          {siteConfig.categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collection/${cat.slug}`}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                cat.slug === slug
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
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
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No pieces in this category yet. Check back soon.
            </p>
            <Link
              href="/collection"
              className="inline-block mt-6 text-sm font-medium text-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Browse all pieces
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
