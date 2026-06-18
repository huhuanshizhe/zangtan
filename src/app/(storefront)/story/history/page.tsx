import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "History — Woven Plateau",
  description: "Trace the thousand-year journey of Tibetan carpet weaving — from nomadic wool traditions and Silk Road cultural exchange to monastery commissions and contemporary revival.",
};

export default function HistoryPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/story" className="hover:text-foreground transition-colors">Our Story</Link>
          <span>/</span>
          <span className="text-foreground">History</span>
        </nav>

        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">The Journey</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">A Thousand Years in the Making</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          The Tibetan carpet has traveled a millennium — from the felted mats of nomadic camps to
          the throne rooms of the Potala Palace, from Silk Road trading posts to contemporary
          design galleries. Its story is one of continuity, adaptation, and the enduring power
          of handwork.
        </p>

        <figure className="mb-16">
          <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary">
            <img src="/images/reference/微信图片_20260617161724_18_2297.jpg" alt="Antique Tibetan carpet with traditional patterns displayed in natural light" className="h-full w-full object-cover" />
          </div>
          <figcaption className="text-xs text-muted-foreground/70 mt-3 italic">
            An antique Tibetan carpet — centuries of cultural exchange woven into every knot
          </figcaption>
        </figure>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Nomadic Beginnings</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The earliest Tibetan textiles were felted — wool compressed and worked into dense,
            insulating mats that served as tent floors, bedding, and saddle pads. Felt-making
            predates weaving on the plateau and remains an essential craft among nomadic
            communities to this day. Felt requires no loom, no spinning — just wool, water,
            pressure, and skill passed from mother to daughter.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The transition from felt to knotted pile carpets likely occurred through contact
            with weaving traditions along the Silk Road. By the 11th century, distinctive
            Tibetan knotting techniques had emerged, adapted to local materials and cultural
            needs. The vertical loom, the continuous-warp knot, and the preference for
            high-altitude wool all distinguish Tibetan carpets from their Persian, Turkish,
            and Chinese counterparts.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">The Silk Road Exchange</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Tibet's position at the crossroads of Central Asia made it a natural conduit for
            cultural and artistic exchange. Chinese silk brocades brought peony, dragon, and
            phoenix motifs that Tibetan weavers adapted to wool. Indian Buddhist iconography
            introduced the lotus, the endless knot, and the eight auspicious symbols. Persian
            carpet traditions influenced border designs and medallion compositions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            But Tibetan weavers did not simply copy. They transformed these influences into
            something distinctly their own — bolder in color, freer in drawing, and always
            rooted in the materials of the plateau. A dragon on a Tibetan khaden does not
            look like a dragon on a Chinese silk robe. It has been reinterpreted through
            the logic of wool, knot, and the weaver's hand.
          </p>
        </section>

        <figure className="mb-16">
          <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary">
            <img src="/images/reference/微信图片_20260617161726_19_2297.jpg" alt="Historic Tibetan carpet showing cultural fusion of motifs" className="h-full w-full object-cover" />
          </div>
          <figcaption className="text-xs text-muted-foreground/70 mt-3 italic">
            Silk Road influences: Chinese dragon motifs reinterpreted through Tibetan wool and knot
          </figcaption>
        </figure>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Monastery & Palace: The Golden Age</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            From the 17th to 19th centuries, Tibetan carpet weaving reached its classical peak,
            driven by commissions from the great Gelugpa monasteries — Drepung, Sera, Ganden —
            and the Potala Palace in Lhasa. The Wangden Valley in particular became famous for
            producing carpets of exceptional quality and distinctive design, characterized by
            dense knotting, rich colors, and complex mandala-inspired compositions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Temple runners stretched the length of assembly halls, marking seating for hundreds
            of monks during prayer. Throne carpets elevated the seats of high lamas. Door
            coverings and pillar wraps defined sacred spaces. These were not furnishings in
            the modern sense — they were integral to the architecture of devotion.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Alongside monastic production, domestic weaving flourished in villages and nomadic
            camps. Every household had its khaden — the body-scale sitting rug that was the
            center of family life. These domestic pieces, woven by and for the family, often
            display a freshness and spontaneity that formal monastic commissions lack.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Decline & Revival</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The 20th century brought disruption — political upheaval, the introduction of
            synthetic dyes and machine-spun yarns, and the decline of the traditional
            patronage system. Many weaving communities dispersed. Knowledge that had been
            transmitted orally for generations was at risk of being lost.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            But the past three decades have seen a remarkable revival. Young Tibetans are
            returning to the loom, often combining traditional techniques with contemporary
            design sensibilities. International collectors and designers have rediscovered
            Tibetan carpets, drawn by their authenticity, material integrity, and the
            depth of their cultural narrative. What was once in danger of becoming a
            museum piece is once again a living craft.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Into the 21st Century</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Today's Tibetan carpet exists in two worlds simultaneously: the traditional
            workshop where techniques unchanged for centuries produce pieces for monasteries
            and homes on the plateau, and the global design market where Tibetan carpets
            find new audiences in contemporary interiors. This duality is not a tension —
            it is a strength. The craft has proven its ability to remain relevant across
            vastly different contexts because its foundation — exceptional materials,
            skilled hands, and cultural depth — is timeless.
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
