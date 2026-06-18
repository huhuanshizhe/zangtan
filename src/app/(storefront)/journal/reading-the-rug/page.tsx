import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading the Rug — Woven Plateau Journal",
  description: "Every dragon, lotus, and cloud on a Tibetan carpet carries meaning accumulated over centuries. A guide to the visual language woven into every piece.",
};

export default function ArticlePage() {
  return (
    <article className="py-12 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link href="/journal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Journal
        </Link>

        <span className="text-xs uppercase tracking-[0.15em] text-primary">Culture</span>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-2 mb-6">Reading the Rug: A Guide to Tibetan Motifs</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Tibetan carpets are not merely decorative. Their patterns form a visual language — a way of
          expressing wishes for peace, abundance, longevity, and spiritual well-being. To read a Tibetan
          carpet is to read a language of symbols that has been spoken across the Silk Road for centuries.
        </p>
        <p className="text-xs text-muted-foreground mb-12">June 2026 · 5 min read</p>

        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-12">
          <img src="/images/reference/微信图片_20260617161726_19_2297.jpg" alt="Tibetan carpet with dragon and phoenix motifs showing intricate border designs" className="h-full w-full object-cover" />
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Dragon: The Celestial Guardian</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The dragon is perhaps the most dramatic and immediately recognizable motif in Tibetan carpet
            design. In Tibetan Buddhist culture, the dragon is not a fearsome beast but a celestial being —
            a symbol of power, protection, and the sky realm itself. Dragons on temple runners and khaden are
            rendered with rhythmic, flowing lines that suggest movement and vitality. They grip jewels or
            flaming pearls in their claws, symbols of wisdom and wish-fulfillment.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A carpet with a dragon motif is not merely decorated — it is guarded. The dragon is woven as a
            protective presence, whether in a monastery assembly hall or a family living space.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Phoenix: Grace and Harmony</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Often paired with the dragon, the phoenix — adapted from Chinese Fenghuang imagery — represents
            grace, peace, and the harmonious union of opposites. Where the dragon embodies yang (active,
            masculine energy), the phoenix embodies yin (receptive, feminine grace). Together, they represent
            cosmic balance — a wish for harmony in the household.
          </p>
        </section>

        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-12">
          <img src="/images/reference/微信图片_20260617161720_16_2297.jpg" alt="Close-up of traditional Tibetan carpet pattern showing lotus and border designs" className="h-full w-full object-cover" />
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Lotus: The Flower of Enlightenment</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The lotus holds profound meaning across Buddhist cultures. Rooted in the mud of material
            existence, it grows through water to bloom pristine above the surface — a metaphor for the
            spiritual journey from ignorance to enlightenment. In Tibetan carpets, lotuses appear as
            medallions, border patterns, or central compositional elements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Tiger: Fearlessness and Spiritual Achievement</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The tiger is an ancient motif in Tibetan and Central Asian art, predating Buddhism on the
            plateau. In Tibetan tradition, the tiger represents fearlessness and spiritual achievement —
            the ability to move through the world without being consumed by fear or attachment. Tiger
            stripe patterns on saddle rugs were believed to protect both horse and rider on dangerous
            mountain journeys.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Cloud Motifs: Wishes Fulfilled</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Stylized cloud motifs — often adapted from the Chinese ruyi scepter form — represent wish
            fulfillment and prosperity. They float through the composition like blessings, connecting
            the various symbolic elements. Clouds are rarely the main subject of a carpet but are
            essential to its visual rhythm, creating the sense of a world in which dragons, phoenixes,
            and flowers inhabit a shared, blessed space.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Reading Beyond the Individual Symbol</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The meaning of a Tibetan carpet is not simply the sum of its individual symbols. It is in
            the relationship between them — the way a dragon curls around a lotus, the way clouds
            frame a central medallion, the way borders create protected space. The composition as a
            whole expresses a worldview: ordered, balanced, meaningful, and infused with wishes
            for a good life.
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
