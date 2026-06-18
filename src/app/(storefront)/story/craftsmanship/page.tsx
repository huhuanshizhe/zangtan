import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Craftsmanship — Woven Plateau",
  description: "Discover the intricate art of Tibetan carpet weaving — from hand-spinning highland wool to the traditional Tibetan knot technique passed down through generations.",
};

export default function CraftsmanshipPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/story" className="hover:text-foreground transition-colors">Our Story</Link>
          <span>/</span>
          <span className="text-foreground">Craftsmanship</span>
        </nav>

        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">The Making</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">The Hands Behind the Rug</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          A Tibetan carpet is not made by machine. It is made by hands — hands that have learned the craft across
          generations, hands that tie each knot with intention, hands that understand wool the way a musician
          understands their instrument.
        </p>

        {/* Hero Image */}
        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-16">
          <img src="/images/reference/微信图片_20260617161732_20_2297.jpg" alt="Artisan weaving a Tibetan carpet on a traditional vertical loom" className="h-full w-full object-cover" />
        </div>

        {/* Section 1 */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">The Vertical Loom</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The traditional Tibetan carpet is woven on a vertical loom — a simple but ingenious wooden frame that
            holds the cotton warp threads under tension. The weaver sits or stands before it, working row by row,
            knot by knot. This loom has remained largely unchanged for centuries because it works: it gives the
            weaver direct control over tension, density, and pattern placement.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Unlike mechanized looms that produce identical pieces at speed, the vertical loom demands patience.
            A single khaden — the body-scale sitting rug — takes a skilled weaver over a month to complete.
            Larger pieces can take three months or more. This slowness is not inefficiency; it is the very
            nature of handcraft.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">The Tibetan Knot</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The defining technical feature of Tibetan carpets is the knot — specifically the Tibetan knot
            (also known as the Senneh knot). Unlike the Persian or Turkish knot, the Tibetan knot wraps
            around a continuous warp rod, creating a pile that is both dense and remarkably even. This
            technique allows for knot densities of 800 to over 1,200 knots per square decimeter, giving
            Tibetan carpets their characteristic clarity of pattern and resilience underfoot.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Each knot is tied by hand. The weaver loops the wool yarn around the warp, pulls it tight,
            and cuts it — then moves to the next. This rhythm repeats thousands of times per day, building
            the carpet row by row from the bottom up. It is a meditative process. Many weavers describe
            the work as a form of contemplation, the repetitive motion creating its own quiet focus.
          </p>
        </section>

        {/* Image */}
        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-16">
          <img src="/images/reference/微信图片_20260617161715_14_2297.jpg" alt="Close-up of hand-knotting process showing wool yarn and warp threads" className="h-full w-full object-cover" />
        </div>

        {/* Section 3 */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Trimming & Finishing</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Once the knotting is complete, the carpet is cut from the loom and the finishing begins.
            The surface is carefully trimmed with large shears — a skill that takes years to master.
            Too shallow a trim and the pattern remains blurry; too deep and the pile loses its softness.
            The trimmer must read the surface like a map, following the contours of the design to bring
            each motif into sharp relief.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            After trimming, the carpet is washed in cold highland water, which helps the wool fibers
            bloom and settle into their final texture. The piece is then stretched and dried in the
            mountain sun — a final touch that connects the finished textile back to the landscape
            where its wool was grown.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">A Living Tradition</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The techniques used today are essentially the same as those used centuries ago. Walk into a
            workshop in Gyantse today and you will see looms, tools, and hand movements that would be
            instantly recognizable to a weaver from the 18th century. This continuity is not stagnation — it
            is the sign of a craft that has found its perfect form.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Yet the tradition is also alive and adapting. Young weavers bring new color sensibilities.
            Contemporary designers collaborate with traditional workshops. The Tibetan carpet, like all
            living crafts, continues to evolve while remaining rooted in the knowledge of the hands
            that came before.
          </p>
        </section>

        {/* CTA */}
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
