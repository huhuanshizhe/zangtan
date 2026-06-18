import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Tent to Temple — Woven Plateau Journal",
  description: "Tibetan textiles serve across the full spectrum of life — from nomadic tents and village homes to monastery assembly halls and palace throne rooms.",
};

export default function ArticlePage() {
  return (
    <article className="py-12 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link href="/journal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Journal
        </Link>

        <span className="text-xs uppercase tracking-[0.15em] text-primary">History</span>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-2 mb-6">From Tent to Temple</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Tibetan textiles do not occupy a single context. They move through the full spectrum of life —
          from the felted floors of nomadic yak-hair tents to the pillared assembly halls of great monasteries.
          Each context shapes the textile differently.
        </p>
        <p className="text-xs text-muted-foreground mb-12">June 2026 · 5 min read</p>

        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-12">
          <img src="/images/reference/微信图片_20260617161724_18_2297.jpg" alt="Antique Tibetan carpet displayed in natural light showing its ceremonial context" className="h-full w-full object-cover" />
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">The Nomadic Tent</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In the black yak-hair tents of nomadic pastoralists, textiles served as the architecture
            of daily life. Felted wool mats covered the ground, providing insulation against the frozen
            earth. Saddle rugs cushioned both horse and rider on journeys that could last weeks. Woolen
            blankets and clothing protected against winter temperatures that dropped far below freezing.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These nomadic textiles were not decorative. They were survival tools — pragmatic, durable,
            and inseparable from the rhythm of pastoral life. Yet even here, pattern and color appeared:
            stripes on saddle blankets, simple geometric borders on tent mats, the natural browns and
            creams of undyed wool arranged in pleasing alternation. The impulse to make even the most
            functional object beautiful is deeply human.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">The Village Household</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In settled farming villages, the household became the center of textile production and use.
            The khaden — the body-scale sitting rug — defined domestic space. Laid on the kang (the
            raised platform along the wall), khaden marked where family members sat, ate, slept, and
            received guests. The quality of a family's khaden signaled their status and hospitality.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Winter was the weaving season. When barley fields lay fallow under snow, the loom became
            the focus of household activity. Women spun wool; men wove; children learned by watching.
            The carpet was not a commodity produced for an anonymous market — it was made within the
            household, often for the household, carrying the specific knowledge and aesthetic preferences
            of a particular family and village.
          </p>
        </section>

        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-12">
          <img src="/images/reference/微信图片_20260617161722_17_2297.jpg" alt="Traditional Tibetan household textile in its domestic context" className="h-full w-full object-cover" />
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">The Monastery</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In Tibetan Buddhist monasteries, carpets took on their most formal and elaborate expression.
            Long runners — some spanning the entire length of an assembly hall — marked seating for
            hundreds of monks during prayer. Throne carpets elevated the seats of high lamas, their
            designs incorporating the most auspicious symbols: dragons for protection, lotuses for
            purity, endless knots for the interconnectedness of all things.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Wangden Valley, in particular, became famous for monastery-grade carpets — densely
            knotted, richly colored, and designed to harmonize with the butter lamps, gilded statues,
            and painted murals of monastic interiors. These carpets were not furnishings in the
            modern sense. They were integral to the architecture of devotion, defining sacred space
            and supporting the bodies of those engaged in spiritual practice.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Door coverings, pillar wraps, and ceremonial textiles completed the monastic textile
            environment. A visitor entering a Tibetan monastery would find themselves surrounded by
            woven wool — underfoot, on the pillars, framing the doorways — a total textile environment
            that softened sound, held warmth, and carried the visual language of Buddhist cosmology.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Continuity Across Contexts</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            What is remarkable about Tibetan textiles is the continuity across these vastly different
            contexts. The same knotting technique, the same wool, the same basic loom — adapted and
            refined but never fundamentally changed. A saddle rug and a temple runner are different
            answers to different needs, but they share a common textile DNA. This continuity across
            the spectrum of life — from the practical to the sacred, from the domestic to the
            ceremonial — is one of the defining features of the Tibetan weaving tradition.
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
