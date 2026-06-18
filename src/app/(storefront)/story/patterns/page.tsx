import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patterns & Symbolism — Woven Plateau",
  description: "The visual language of Tibetan carpets — dragons, phoenixes, lotus blossoms, cloud motifs, and the eight auspicious symbols that carry wishes for peace, abundance, and a good life.",
};

export default function PatternsPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/story" className="hover:text-foreground transition-colors">Our Story</Link>
          <span>/</span>
          <span className="text-foreground">Patterns & Symbolism</span>
        </nav>

        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">The Language</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">A Visual Language of Wishes</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Tibetan carpets are not simply decorative. Their patterns form a visual language — a way of
          expressing wishes for peace, abundance, longevity, and spiritual well-being. Every dragon,
          lotus, and cloud carries meaning accumulated over centuries of cultural exchange across the
          Silk Road.
        </p>

        <figure className="mb-16">
          <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary">
            <img src="/images/reference/微信图片_20260617161726_19_2297.jpg" alt="Tibetan carpet with traditional dragon and lotus motifs" className="h-full w-full object-cover" />
          </div>
          <figcaption className="text-xs text-muted-foreground/70 mt-3 italic">
            Dragon and phoenix motifs — celestial guardians woven for protection and harmony
          </figcaption>
        </figure>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Dragon: Power and Protection</h2>
          <p className="text-muted-foreground leading-relaxed">
            The dragon is perhaps the most dramatic motif in Tibetan carpet design. In Tibetan Buddhist
            culture, the dragon does not carry the fearsome connotations it may have in the West — it
            is a celestial being, a symbol of power, protection, and the sky realm. Dragons on temple
            runners and khaden are rendered with rhythmic, flowing lines that suggest movement and
            vitality. They are guardians of sacred space, woven to protect the sitter or the space
            itself.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Phoenix: Grace and Renewal</h2>
          <p className="text-muted-foreground leading-relaxed">
            The phoenix — Fenghuang in Chinese, adapted into Tibetan visual culture via Silk Road
            exchange — represents grace, renewal, and the harmonious union of opposites. Often
            paired with the dragon, the phoenix embodies the feminine principle, balancing the
            dragon's masculine energy. In Tibetan textiles, phoenixes appear floating among clouds,
            their flowing tail feathers echoing the curves of auspicious cloud motifs.
          </p>
        </section>

        <figure className="mb-16">
          <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary">
            <img src="/images/reference/微信图片_20260617161720_16_2297.jpg" alt="Detailed view of Tibetan carpet patterns showing border designs and central motifs" className="h-full w-full object-cover" />
          </div>
          <figcaption className="text-xs text-muted-foreground/70 mt-3 italic">
            Intricate border designs framing a central lotus medallion
          </figcaption>
        </figure>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Lotus: Enlightenment Rising</h2>
          <p className="text-muted-foreground leading-relaxed">
            The lotus holds profound meaning across Buddhist cultures. Rooted in mud, it grows through
            water to bloom pristine above the surface — a metaphor for the spiritual journey from
            ignorance to enlightenment. In Tibetan homes and monasteries, lotus motifs appear on
            carpets as medallions, border patterns, or central designs. They are not merely decorative;
            they are reminders of aspiration.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Borders and Frameworks</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most Tibetan carpets feature elaborate borders — sometimes three or more concentric frames
            surrounding the central field. These borders are not merely decorative; they create a
            defined, protected space. The meander pattern (Greek key), known in Tibetan tradition as
            the "Chinese wall," is especially common, often rendered with three-dimensional shading
            that gives the border depth and presence.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The border frames the carpet's central message, much as a temple wall frames a sacred
            space. It says: within this boundary, something important happens — rest, conversation,
            contemplation, or simply the quiet presence of daily life.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">A Language Anyone Can Read</h2>
          <p className="text-muted-foreground leading-relaxed">
            What makes Tibetan carpet patterns remarkable is their accessibility. Unlike some religious
            art that requires specialized knowledge to interpret, carpet patterns are relatively direct.
            A flower is a flower — a wish for beauty and abundance. A dragon signals protection. A
            lotus speaks of purity. The patterns are sophisticated but not obscure, making them a
            visual language that can be appreciated across cultures.
          </p>
        </section>

        <div className="border-t border-border pt-12 mt-8">
          <Link href="/collection" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group">
            Explore the Collection
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
