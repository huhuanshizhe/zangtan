import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Khaden — Woven Plateau",
  description: "The khaden is the most intimate Tibetan textile — a body-scale sitting rug that transforms any space into a place of rest, conversation, and contemplation.",
};

export default function KhadenPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/story" className="hover:text-foreground transition-colors">Our Story</Link>
          <span>/</span>
          <span className="text-foreground">The Khaden</span>
        </nav>

        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">The Essential Textile</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">A Rug to Live On</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          In Tibetan homes, the khaden is not placed under furniture. It is the furniture —
          a defined space for the body to sit, recline, eat, receive guests, and rest.
          It is the most personal and versatile of all Tibetan textile forms.
        </p>

        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-16">
          <img src="/images/products/khaden-crimson.png" alt="A crimson khaden in a modern living space, showing its body-scale proportions" className="h-full w-full object-cover" />
        </div>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">What Is a Khaden?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The word <em>khaden</em> refers to a sitting rug — typically around 80 x 160 cm,
            roughly the size of a body at rest. It is larger than a cushion, smaller than a
            floor rug, and designed to create an intimate zone around the seated person. In
            traditional Tibetan homes, the khaden was placed on the <em>kang</em> — a raised
            platform that ran along the wall — defining the family's primary living space.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A khaden is not walked on; it is sat upon, reclined against, and lived with.
            This distinction is essential. It shapes everything about the textile — its
            density, its pattern orientation, its emotional presence. A khaden is seen
            from above, experienced at close range, and touched by the body daily.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">The Life of a Khaden</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A well-made khaden had a long and evolving life within the household. When new,
            it occupied the most prominent position — the guest area, the family gathering
            space. As it aged and wore, it moved to less formal areas: the sleeping quarters,
            then the kitchen, and eventually — cut into smaller pieces — to door coverings,
            saddle pads, or cushion covers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nothing was wasted. The khaden was not a decorative object to be preserved in
            pristine condition; it was a functional textile that served the family through
            every phase of its material life. This cycle of use — from honored centerpiece
            to humble utility — reflects a philosophy of material respect that is deeply
            embedded in Tibetan culture.
          </p>
        </section>

        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-16">
          <img src="/images/reference/微信图片_20260617161722_17_2297.jpg" alt="Traditional khaden in a Tibetan household setting" className="h-full w-full object-cover" />
        </div>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">The Khaden in a Modern Home</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The khaden translates remarkably well to contemporary interiors — perhaps better
            than any other traditional Tibetan textile. Its body-scale proportions make it
            ideal for spaces where a full room-size rug would be impractical: a reading nook,
            a meditation corner, beside a low bed, or in a tea room where guests sit close
            to the ground.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Unlike conventional rugs that are arranged around furniture, the khaden creates
            its own destination. Place one by a window with a few cushions, and you have
            an instant reading corner. Put one in a meditation space, and it defines a
            warm, tactile boundary for practice. Lay one beside a daybed, and it extends
            the lounging surface to the floor.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The khaden is not about making a room look like Tibet. It is about bringing
            a different way of inhabiting space — one that values sitting, staying, and
            the quiet presence of handcraft — into the modern home. In a world of
            constant motion, the khaden offers a place to stop.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Choosing Your Khaden</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When selecting a khaden, consider its relationship to your body and your space.
            Denser knotting (800+ knots per square decimeter) produces a firmer surface
            with crisper pattern definition — ideal for meditation or as a statement piece.
            More open weaves create a softer, more yielding surface suited to lounging and
            daily use.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The pattern orientation matters. Central medallions anchor the space; directional
            motifs like dragons or phoenixes create a sense of flow. Border designs frame
            the sitting area, giving it a sense of enclosure and protection — much as they
            have done in Tibetan homes for centuries.
          </p>
        </section>

        <div className="border-t border-border pt-12 mt-8">
          <Link href="/collection/khaden" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group">
            Browse Khaden Collection
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
