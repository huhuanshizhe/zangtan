import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Color of Patience — Woven Plateau Journal",
  description: "Natural dyeing on the Tibetan plateau is a form of alchemy — transforming plants, roots, and minerals into colors that synthetic chemistry cannot replicate.",
};

export default function ArticlePage() {
  return (
    <article className="py-12 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link href="/journal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Journal
        </Link>

        <span className="text-xs uppercase tracking-[0.15em] text-primary">Craft</span>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-2 mb-6">The Color of Patience</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Before a single knot is tied on a Tibetan carpet, another art has already been practiced for
          weeks or months: the art of natural dyeing. It is slow, unpredictable, and irreplaceable.
        </p>
        <p className="text-xs text-muted-foreground mb-12">June 2026 · 4 min read</p>

        <figure className="mb-12">
          <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary">
            <img src="/images/reference/微信图片_20260617161737_22_2297.jpg" alt="Naturally dyed wool yarns in vibrant colors ready for weaving" className="h-full w-full object-cover" />
          </div>
          <figcaption className="text-xs text-muted-foreground/70 mt-3 italic">
            Hand-spun yarns in the traditional Tibetan palette — madder red, indigo blue, walnut brown
          </figcaption>
        </figure>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">The Dyer's Alchemy</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Natural dyeing is not a formula to be followed but a process to be understood. Each dye
            source — plant, root, bark, mineral, or insect — demands its own treatment. Madder root
            yields a spectrum from soft coral to deep crimson depending on the water temperature, the
            mineral content of the water, the mordant used, and the duration of the dye bath. Indigo
            must be fermented in a living vat that requires daily attention, like a sourdough starter
            or a garden.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The dyer's knowledge is a form of embodied chemistry — learned through years of observation
            and practice rather than from textbooks. A skilled dyer can read the color of the dye bath,
            adjust the temperature by feel, and know when the wool has absorbed enough color by the way
            it moves in the liquid.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">The Tibetan Palette</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The traditional Tibetan palette is rooted in the landscape:
          </p>
          <ul className="space-y-3 text-muted-foreground leading-relaxed mb-4">
            <li><strong>Red & Coral</strong> — Madder root (Rubia tinctorum), yielding the signature warm reds of Tibetan carpets. The intensity depends on the number of dye cycles and the mordant concentration.</li>
            <li><strong>Blue</strong> — Indigo (Indigofera), fermented in vats over weeks or months. Indigo dyeing is particularly challenging because the dye is insoluble until reduced by fermentation — requiring a living, breathing dye vat.</li>
            <li><strong>Brown & Tan</strong> — Walnut hulls, producing warm browns from light tan to deep espresso. Walnut is one of the most accessible and reliable natural dyes on the plateau.</li>
            <li><strong>Yellow & Gold</strong> — Local plants including rhubarb root, onion skins, and various plateau flowers. Yellows are often used as highlights or in combination with indigo to create greens.</li>
            <li><strong>Orange</strong> — A combination of madder red and plant-based yellows, or from specific local dye sources like Tibetan lycium.</li>
          </ul>
        </section>

        <figure className="mb-12">
          <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary">
            <img src="/images/story/story-dyeing.png" alt="Natural plant dyeing process for Tibetan carpet wool" className="h-full w-full object-cover" />
          </div>
          <figcaption className="text-xs text-muted-foreground/70 mt-3 italic">
            The dyer's alchemy — transforming plants and minerals into colors that synthetic chemistry cannot replicate
          </figcaption>
        </figure>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Why Natural Matters</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The difference between natural and synthetic dyes is not just philosophical — it is visible
            and tactile. Natural dyes penetrate the wool fiber, bonding at a molecular level and becoming
            part of the material rather than coating its surface. This means natural colors age gracefully:
            they mellow rather than fade, developing a patina over decades of use.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Synthetic dyes, by contrast, sit on the surface of the fiber. They can be brighter initially
            but fade unevenly, and they lack the depth and complexity that comes from natural variation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Perhaps most importantly, natural dyes carry a quality of aliveness. No two dye batches are
            exactly the same. The madder harvested in one season may yield a slightly warmer crimson than
            the next. The indigo vat responds to temperature and humidity. This variability is not a flaw —
            it is the signature of a living material, and it gives each carpet a color character that is
            genuinely one of a kind.
          </p>
        </section>

        <div className="border-t border-border pt-10 mt-8">
          <Link href="/journal" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> More from the Journal
          </Link>
        </div>
      </div>
    </article>
  );
}
