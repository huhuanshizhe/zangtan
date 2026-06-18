import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Story of Tibetan Carpets",
  description: "Explore the thousand-year tradition of Tibetan carpet weaving — from highland wool and ancient knotting techniques to the symbolism woven into every pattern.",
};

export default function StoryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/story/story-plateau.png)" }} />
        <div className="relative z-20 mx-auto max-w-4xl px-6 lg:px-8 pb-16 w-full text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            A textile tradition
            <br />
            from the roof of the world
          </h1>
          <p className="mt-8 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            A Tibetan carpet is not merely a decorative textile. It belongs to a
            wider tradition in which wool, handwork, domestic life, Buddhist
            visual culture, and bodily experience are closely connected.
          </p>
        </div>
      </section>

      {/* Origins */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground sticky top-8">
                Origins
              </p>
            </div>
            <div className="md:col-span-3 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The Tibetan plateau, with altitudes ranging from 1,000 to 28,000
                feet, demanded warmth, resilience, and comfort. In this harsh and
                beautiful landscape, wool became the essential material of daily
                life — transformed by skilled hands into carpets, cushions,
                clothing, tents, and horse trappings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Tibetan carpets appeared in temples, homes, monastic halls, tents,
                and on horseback. Some were used for sitting, sleeping, praying,
                or receiving guests. Others served as saddle rugs, temple runners,
                door coverings, or ceremonial sitting mats. This range of uses
                shows that Tibetan rugs are not a single product type, but a{" "}
                <em>living textile tradition</em> shaped by climate, wool,
                mobility, devotion, and domestic life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The tradition may stretch back a thousand years or more, yet the
                basic patterns of life it served have remained remarkably
                consistent. Farmers grew barley in the warm months and wove wool
                during the long winters. Nomadic pastoralists brought wool, meat,
                and other goods to the valley markets, continuing a cycle of
                exchange that has endured for centuries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Scenes */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Three Scenes
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Temple, Household, Horseback
            </h2>
          </div>

          <div className="space-y-16">
            <SceneBlock
              title="The Temple"
              text="In monasteries and shrines across Tibet, carpets served as meditation seats, ceremonial runners, and throne covers. Long runners were laid in assembly halls to mark seating for monks during prayer. Red, orange, and gold — the colors of monastic life — predominated, harmonizing with butter lamps, gilded statues, and the robes of lamas."
              detail="Wangden Valley carpets were specifically commissioned for the great Gelugpa monasteries — Drepung, Sera, and Ganden — and for the Potala Palace itself."
            />
            <SceneBlock
              title="The Household"
              text="In Tibetan homes, the kang — a raised platform often running along a wall — was the center of family life. Here, carpets were laid for sitting, sleeping, eating, and receiving guests. The khaden, a body-scale sitting rug, was the most intimate textile: not placed under furniture, but directly beneath and around the body."
              detail="A well-made khaden was treasured. When it wore thin, it was moved to a sleeping area, then to the kitchen, and finally cut into smaller pieces — nothing was wasted."
            />
            <SceneBlock
              title="The Horseback"
              text="Tibetans were passionate travelers, and the saddle rug was as essential as the saddle itself. Made to cushion both rider and horse, these textiles were often boldly patterned and built to withstand the rigors of long journeys across mountain passes."
              detail="Horse blankets, pack-animal covers, and forehead decorations for mules completed the equestrian textile tradition — evidence that Tibetan weaving served movement, not just stillness."
            />
          </div>
        </div>
      </section>

      {/* Artisan Full-Width Image */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src="/images/story/story-artisan.png"
          alt="Tibetan artisan hands weaving on a traditional loom"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent" />
      </section>

      {/* Craftsmanship */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground sticky top-8">
                The Craft
              </p>
            </div>
            <div className="md:col-span-3 space-y-6">
              <h2 className="font-serif text-3xl text-foreground">
                From wool to woven art
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The classic Tibetan pile carpet — the <em>drumtse</em> — is woven
                on a vertical loom using a distinctive knotting technique. The
                weaver loops yarn around a rod and a continuous warp thread, then
                cuts the loop to create pile. Row by row, knot by knot, the
                design emerges from the weaver&apos;s hands.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The wool comes from sheep grazing at high altitudes — longer,
                stronger, and more resilient than lowland fibers. After shearing,
                the wool is cleaned, carded, and spun by hand. Traditional dyes
                are drawn from the landscape: indigo for blue, madder root for
                red, walnut husks for brown, and a range of local plants for
                yellows and greens.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A single khaden may take over a month to complete. After weaving,
                the carpet is carefully trimmed — a skill in itself — so that the
                motifs emerge with greater clarity and the surface achieves a
                refined, even texture. The value lies not only in the wool and
                pattern, but in the time, handwork, and human judgment held
                within each textile.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { number: "1,200+", label: "Knots per sq. decimeter" },
                  { number: "30+", label: "Days to weave one khaden" },
                  { number: "4,000m", label: "Minimum grazing altitude" },
                  { number: "1,000+", label: "Years of tradition" },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-primary/30 pl-4 py-2">
                    <p className="font-serif text-2xl text-foreground">{stat.number}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dyeing Process Image */}
      <section className="relative h-[40vh] min-h-[280px] overflow-hidden">
        <img
          src="/images/story/story-dyeing.png"
          alt="Natural plant-based dyeing process for Tibetan carpet wool"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>

      {/* Patterns & Symbols */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Visual Language
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Patterns & Their Meanings
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              The motifs of Tibetan carpets are rich but often direct and readable.
              They are not obscure codes, but visual expressions of wishes for
              peace, abundance, stability, and a good life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Dragon",
                meaning: "Power, celestial realm, good fortune",
                origin: "Adapted from Chinese imperial symbolism",
              },
              {
                name: "Phoenix",
                meaning: "Grace, peace, harmony",
                origin: "Often paired with the dragon",
              },
              {
                name: "Lotus",
                meaning: "Enlightenment, purity rising from mud",
                origin: "Buddhist sacred flower",
              },
              {
                name: "Peony",
                meaning: "Abundance, wealth, beauty",
                origin: "From Chinese silk brocade traditions",
              },
              {
                name: "Tiger",
                meaning: "Spiritual achievement, fearlessness",
                origin: "Ancient Tibetan and Central Asian motif",
              },
              {
                name: "Swastika (Yungdrung)",
                meaning: "Eternity, stability, good fortune",
                origin: "Buddhist and Bon religious symbol",
              },
              {
                name: "Cloud Motifs",
                meaning: "Wish fulfillment, prosperity",
                origin: "Adapted from Chinese ruyi scepter",
              },
              {
                name: "Snow Lion",
                meaning: "Fearlessness, joy, strength",
                origin: "Symbol of the Tibetan plateau",
              },
              {
                name: "Bat",
                meaning: "Good luck, gambler's fortune",
                origin: "Chinese homophone for happiness",
              },
            ].map((symbol) => (
              <div
                key={symbol.name}
                className="bg-background rounded-sm p-6 border border-border"
              >
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {symbol.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {symbol.meaning}
                </p>
                <p className="text-xs text-muted-foreground/70">
                  {symbol.origin}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Life */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground sticky top-8">
                For Modern Homes
              </p>
            </div>
            <div className="md:col-span-3 space-y-6">
              <h2 className="font-serif text-3xl text-foreground">
                A place to sit, stay, and slow down
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Though rooted in Tibetan tradition, the khaden is remarkably well
                suited to modern living. Unlike conventional rugs arranged around
                furniture, it creates its own destination — a place for the body
                to rest directly on wool and warmth.
              </p>
              <div className="space-y-4 mt-6">
                {[
                  "By the window — a reading corner bathed in natural light",
                  "In a tea room — inviting guests to sit close to the ground",
                  "In a meditation space — a warm, defined boundary for practice",
                  "In the study — for quiet thinking and brief rest",
                  "On a daybed — between carpet, cushion, and bedding",
                ].map((use) => (
                  <div key={use} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-sm text-muted-foreground">{use}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6">
                Its appeal is not about making a room look like Tibet. It is about
                bringing a way of living — one that values sitting, staying, and
                slowing down — into the modern home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Explore the Collection
          </h2>
          <p className="text-background/70 mb-8 max-w-lg mx-auto">
            Each piece in our collection is handwoven, unique, and accompanied by
            its story — the materials, the motifs, and the hands that made it.
          </p>
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 rounded-md bg-background text-foreground px-8 py-3.5 text-sm font-medium hover:bg-background/90 transition-colors"
          >
            View Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function SceneBlock({
  title,
  text,
  detail,
}: {
  title: string;
  text: string;
  detail: string;
}) {
  return (
    <div className="border-l-2 border-primary/30 pl-8">
      <h3 className="font-serif text-2xl text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-3">{text}</p>
      <p className="text-sm text-muted-foreground/80 italic">{detail}</p>
    </div>
  );
}
