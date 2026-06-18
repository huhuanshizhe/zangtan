import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal — Woven Plateau",
  description: "Stories, guides, and deep dives into the world of Tibetan carpets — from materials and craftsmanship to history and contemporary design.",
};

const articles = [
  {
    slug: "the-wool-that-cannot-be-rushed",
    title: "The Wool That Cannot Be Rushed",
    subtitle: "Why high-altitude sheep produce the world's most resilient carpet fiber",
    image: "/images/reference/微信图片_20260617161735_21_2297.jpg",
    date: "June 2026",
    category: "Materials",
  },
  {
    slug: "reading-the-rug",
    title: "Reading the Rug: A Guide to Tibetan Motifs",
    subtitle: "Dragons, lotuses, and the visual language woven into every carpet",
    image: "/images/reference/微信图片_20260617161726_19_2297.jpg",
    date: "June 2026",
    category: "Culture",
  },
  {
    slug: "the-color-of-patience",
    title: "The Color of Patience",
    subtitle: "Natural dyeing on the Tibetan plateau — from madder root to indigo vats",
    image: "/images/reference/微信图片_20260617161737_22_2297.jpg",
    date: "June 2026",
    category: "Craft",
  },
  {
    slug: "from-tent-to-temple",
    title: "From Tent to Temple",
    subtitle: "The many lives of Tibetan textiles across household, monastery, and horseback",
    image: "/images/reference/微信图片_20260617161724_18_2297.jpg",
    date: "June 2026",
    category: "History",
  },
  {
    slug: "equestrian-art-of-the-plateau",
    title: "Equestrian Art of the Plateau",
    subtitle: "Saddle rugs and the Tibetan tradition of weaving for the horse",
    image: "/images/reference/微信图片_20260617161720_16_2297.jpg",
    date: "June 2026",
    category: "History",
  },
  {
    slug: "bringing-the-plateau-home",
    title: "Bringing the Plateau Home",
    subtitle: "How to style Tibetan carpets in contemporary interiors",
    image: "/images/products/lifestyle-bedroom.png",
    date: "June 2026",
    category: "Design",
  },
];

export default function JournalPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">The Journal</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Stories from the Loom</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-16">
          Deep dives into the materials, techniques, history, and cultural context of Tibetan carpets —
          written for collectors, designers, and anyone drawn to handcraft with meaning.
        </p>

        {/* Featured Article (first) */}
        <Link
          href={`/journal/${articles[0].slug}`}
          className="group block mb-20 bg-secondary/30 overflow-hidden rounded-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="text-xs uppercase tracking-[0.15em] text-primary mb-3">{articles[0].category}</span>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors mb-3">
                {articles[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{articles[0].subtitle}</p>
              <span className="text-xs text-muted-foreground">{articles[0].date}</span>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-secondary mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-xs uppercase tracking-[0.15em] text-primary">{article.category}</span>
              <h3 className="font-serif text-xl text-foreground mt-2 group-hover:text-primary transition-colors mb-1">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{article.subtitle}</p>
              <span className="text-xs text-muted-foreground/70 mt-2 block">{article.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
