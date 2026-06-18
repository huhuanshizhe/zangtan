import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Wool That Cannot Be Rushed — Woven Plateau Journal",
  description: "High-altitude sheep on the Tibetan plateau grow a fleece fundamentally different from lowland wool — longer, stronger, and imbued with the character of the world's highest grasslands.",
};

export default function ArticlePage() {
  return (
    <article className="py-12 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link href="/journal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Journal
        </Link>

        <span className="text-xs uppercase tracking-[0.15em] text-primary">Materials</span>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-2 mb-6">The Wool That Cannot Be Rushed</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          There is no shortcut to highland wool. You cannot accelerate the growth of a fleece at 4,000 meters.
          The cold, the wind, the intense ultraviolet light — these are not obstacles to be overcome. They are
          the very conditions that produce wool unlike any other on earth.
        </p>
        <p className="text-xs text-muted-foreground mb-12">June 2026 · 4 min read</p>

        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-12">
          <img src="/images/reference/微信图片_20260617161735_21_2297.jpg" alt="Highland wool being prepared for spinning on the Tibetan plateau" className="h-full w-full object-cover" />
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Altitude Is Everything</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The sheep that supply Tibetan carpet wool graze at elevations above 4,000 meters — higher than any
            other wool-producing livestock on the planet. In this extreme environment, where winter temperatures
            drop below -30°C and summer brings intense solar radiation, the sheep have evolved a fleece of
            remarkable properties.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The fibers are significantly longer than lowland wool — often 12 to 18 centimeters — giving the
            yarn exceptional tensile strength. The natural crimp, more pronounced than in warmer-climate wool,
            provides spring and bounce that translates directly into carpet resilience. And the lanolin content,
            higher than in commercial wool breeds, imparts a subtle natural sheen and water resistance that
            protects the carpet for decades.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These qualities cannot be replicated by breeding programs or feed supplements. They are the direct
            result of altitude, climate, and the slow pace of growth in an unforgiving environment. A sheep
            at 4,000 meters simply cannot grow wool fast — and that slowness is precisely what gives the fiber
            its strength.
          </p>
        </section>

        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-12">
          <img src="/images/reference/微信图片_20260617161715_14_2297.jpg" alt="Hand-spinning highland wool into yarn using traditional drop spindle" className="h-full w-full object-cover" />
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Hand-Spun Character</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            After shearing — done by hand, once a year in early summer — the wool is washed in cold highland
            water, carded, and spun. The spinning is traditionally done by women using a drop spindle, a tool
            that has been used on the plateau for millennia. This is not a mechanized process. The spinner's
            hands control the twist, the tension, and the final thickness of the yarn.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hand-spun yarn carries a subtle irregularity that is prized in Tibetan carpets. Slight variations
            in thickness — invisible to the casual eye but felt by the hand — create a living surface texture.
            Machine-spun yarn, with its mechanical uniformity, produces a carpet surface that is technically
            perfect but visually flat. Hand-spun yarn gives the carpet a quality of aliveness, as if the
            textile itself were breathing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Wool Knowledge as Cultural Knowledge</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Historically, Tibetan weavers possessed detailed knowledge of wool grades. Wool from
            higher-altitude sheep — longer, stronger, more resilient — was reserved for carpets that
            would see heavy use: khaden in family living spaces, temple runners in monastery assembly halls.
            Finer wool from slightly lower elevations was used for clothing, cushion covers, and more
            delicate textiles.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This knowledge was not written down. It was transmitted orally, from master to apprentice,
            from mother to daughter, embedded in the practice of the craft itself. A weaver could assess
            a batch of wool by touch — its length, its crimp, its lanolin content — and know immediately
            what it was suited for. This embodied knowledge is as much a part of the Tibetan carpet
            tradition as the loom itself.
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
