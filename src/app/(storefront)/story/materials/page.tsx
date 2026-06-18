import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materials — Woven Plateau",
  description: "The extraordinary materials behind Tibetan carpets: highland wool from sheep grazing above 4,000 meters, natural dyes from plateau plants, and the craftsmanship that transforms them.",
};

export default function MaterialsPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/story" className="hover:text-foreground transition-colors">Our Story</Link>
          <span>/</span>
          <span className="text-foreground">Materials</span>
        </nav>

        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">The Source</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Highland Wool & Natural Dyes</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Every Tibetan carpet begins long before the loom — in the high-altitude grasslands where sheep
          grow a wool unlike any other, and in the dye pots where plants, roots, and minerals yield
          colors that synthetic chemistry cannot replicate.
        </p>

        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-16">
          <img src="/images/reference/微信图片_20260617161735_21_2297.jpg" alt="Highland wool being prepared for spinning" className="h-full w-full object-cover" />
        </div>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Highland Wool: Born of Altitude</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The wool used in Tibetan carpets comes from sheep that graze at elevations above 4,000 meters
            on the Tibetan plateau. In this harsh environment — cold, windy, with intense UV exposure —
            the sheep grow a fleece that is fundamentally different from lowland wool. The fibers are
            longer, coarser, and more resilient. They have a natural crimp that gives the yarn spring
            and bounce, and a lanolin content that imparts a subtle sheen and water resistance.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Historically, different sources of wool had different uses. Wool from higher-altitude sheep
            — longer, stronger, and more durable — was preferred for carpets that would see heavy use
            in homes and monasteries. Finer wool from lower-altitude sheep was used for clothing and
            delicate textiles. The weaver's knowledge of wool grades was as important as their skill
            at the loom.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Hand-Spinning: The First Transformation</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            After shearing, the wool is washed, carded, and hand-spun into yarn. Hand-spinning —
            traditionally done by women in highland communities — gives the yarn a subtle irregularity
            that is prized in Tibetan carpets. Slight variations in thickness create a living surface
            texture that machine-spun yarn, with its mechanical uniformity, can never achieve.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The spinning is often done with a simple drop spindle, a tool that has been used on the
            plateau for millennia. The spinner's hands control the twist and tension, producing yarn
            that carries the rhythm of the human body — not the drone of a machine.
          </p>
        </section>

        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-16">
          <img src="/images/reference/微信图片_20260617161737_22_2297.jpg" alt="Natural dyed wool yarns in vibrant colors" className="h-full w-full object-cover" />
        </div>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Natural Dyes: Colors from the Earth</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Traditional Tibetan carpets are dyed using natural sources — plants, roots, bark, minerals,
            and sometimes insects. Each dye requires its own process: some need mordants to fix the
            color to the wool, others require multiple dipping cycles to achieve the desired depth.
            The dyer's knowledge is a form of alchemy, balancing temperature, time, concentration,
            and water chemistry.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The palette is distinctly organic. Madder root yields crimsons and corals from soft pink
            to deep red. Indigo — steeped and fermented over weeks — produces blues that range from
            pale sky to midnight. Walnut hulls give warm browns. Local plants and minerals contribute
            golds, sage greens, and muted yellows. These colors do not shout; they breathe. Over
            time, they mellow rather than fade, developing a patina that synthetic dyes can never
            replicate.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">The Living Quality of Natural Color</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            One of the most important characteristics of natural dyes is their variation. No two
            dye batches are exactly the same. The madder harvested in one season may yield a slightly
            warmer crimson than the next. The indigo vat, alive with fermentation, responds to
            temperature and humidity. This variability is not a flaw — it is the signature of a
            living material, and it gives each carpet a color character that is genuinely one of a kind.
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
