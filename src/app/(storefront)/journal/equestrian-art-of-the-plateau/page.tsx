import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equestrian Art of the Plateau — Woven Plateau Journal",
  description: "Tibetans were passionate travelers, and the saddle rug was as essential as the saddle itself — a textile tradition that served movement, not just stillness.",
};

export default function ArticlePage() {
  return (
    <article className="py-12 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link href="/journal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Journal
        </Link>

        <span className="text-xs uppercase tracking-[0.15em] text-primary">History</span>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-2 mb-6">Equestrian Art of the Plateau</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          On the Tibetan plateau, the horse was life — transportation, status, companionship, and survival.
          And the saddle rug, woven with as much care as any domestic textile, was the interface between
          human and animal, between rider and journey.
        </p>
        <p className="text-xs text-muted-foreground mb-12">June 2026 · 4 min read</p>

        <figure className="mb-12">
          <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary">
            <img src="/images/reference/微信图片_20260617161720_16_2297.jpg" alt="Tibetan saddle rug showing bold equestrian patterns and traditional border designs" className="h-full w-full object-cover" />
          </div>
          <figcaption className="text-xs text-muted-foreground/70 mt-3 italic">
            A Tibetan saddle rug — bold patterns that served as both cushion and talisman for the journey
          </figcaption>
        </figure>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">The Saddle Rug: Function Meets Art</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Tibetan saddle rug is a masterpiece of functional design. It cushions both horse and rider,
            distributes weight across the horse's back, and provides grip and stability on steep mountain
            trails. Made of densely knotted wool — often with yak hair incorporated for added durability —
            these textiles were built to withstand the rigors of long journeys across some of the world's
            most challenging terrain.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            But the saddle rug was never merely functional. Bold, often geometric patterns — tiger stripes,
            diamond lattices, auspicious symbols — transformed the horse into a moving canvas. A finely
            woven saddle rug signaled the rider's status, taste, and prosperity. In a culture where the
            horse was central to identity, the saddle rug was a public declaration.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Beyond the Saddle</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The equestrian textile tradition extended beyond saddle rugs to include horse blankets for
            warmth, pack-animal covers for mules and yaks carrying trade goods, and even decorative
            forehead pieces for ceremonial occasions. A well-equipped traveling party was a procession
            of textiles — wool against wool, color against the muted tones of the high-altitude landscape.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This tradition reveals something essential about Tibetan weaving: it served movement, not
            just stillness. Tibetan carpets are often discussed in terms of domestic and monastic settings —
            sitting, meditating, receiving guests. But the equestrian tradition reminds us that Tibetan
            culture was also a culture of travel, trade, and pilgrimage. The carpet accompanied the
            journey.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Patterns of Protection</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The patterns on saddle rugs were not arbitrary. Tiger stripe motifs were believed to
            confer the tiger's fearlessness on both horse and rider. Endless knots and meander
            borders offered symbolic protection during dangerous mountain crossings. The saddle
            rug was, in a sense, a talisman — functional protection in the form of thick wool,
            and spiritual protection in the form of carefully chosen symbols.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Collecting Saddle Rugs Today</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Antique Tibetan saddle rugs are increasingly prized by collectors for their bold,
            graphic quality and their historical significance. Their compact size — typically
            smaller than a khaden — makes them highly versatile in contemporary interiors:
            striking wall hangings, entryway accents, or conversation pieces draped over furniture.
            Each carries the memory of journeys taken, mountain passes crossed, and the quiet
            partnership between horse and rider on the roof of the world.
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
