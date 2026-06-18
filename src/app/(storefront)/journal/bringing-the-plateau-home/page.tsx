import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bringing the Plateau Home — Woven Plateau Journal",
  description: "How to incorporate Tibetan carpets into contemporary interiors — from meditation corners and reading nooks to statement pieces in minimalist spaces.",
};

export default function ArticlePage() {
  return (
    <article className="py-12 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link href="/journal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Journal
        </Link>

        <span className="text-xs uppercase tracking-[0.15em] text-primary">Design</span>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-2 mb-6">Bringing the Plateau Home</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          A Tibetan carpet does not demand that your home look like a monastery. It asks only that you
          give it a place to belong — a corner of stillness, a zone of warmth, a surface that invites
          the body to rest.
        </p>
        <p className="text-xs text-muted-foreground mb-12">June 2026 · 4 min read</p>

        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-12">
          <img src="/images/products/lifestyle-bedroom.png" alt="Tibetan carpet styled in a contemporary bedroom interior" className="h-full w-full object-cover" />
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">The Khaden: A Personal Island</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The khaden — the body-scale sitting rug — is perhaps the easiest Tibetan textile to
            incorporate into a modern home. Its proportions (roughly 80 × 160 cm) are inherently
            versatile, and its purpose — to define a place for the body — translates directly to
            contemporary life.
          </p>
          <ul className="space-y-3 text-muted-foreground leading-relaxed mb-4">
            <li><strong>Reading Nook:</strong> Place a khaden by a window with floor cushions. The rug defines the space; the cushions invite lounging. Natural light brings out the depth of naturally dyed colors.</li>
            <li><strong>Meditation Corner:</strong> A khaden creates a warm, tactile boundary for practice. The wool's natural insulation makes sitting on the floor comfortable even in cooler climates.</li>
            <li><strong>Bedside Warmth:</strong> Lay a khaden beside a low platform bed. It extends the sleeping surface to the floor and provides a soft landing for bare feet in the morning.</li>
            <li><strong>Tea Room Accent:</strong> In spaces where guests sit close to the ground, a khaden defines the gathering point. Its patterns become a natural conversation starter.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Temple Runners: Long Lines of Color</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Temple runners — long, narrow carpets originally made for monastery assembly halls —
            work beautifully in modern corridors, beside a long dining table, or as a striking
            visual axis in an open-plan space. Their elongated proportions create a strong
            directional line that can define zones within larger rooms.
          </p>
        </section>

        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-secondary mb-12">
          <img src="/images/products/lifestyle-meditation.png" alt="Meditation space styled with Tibetan carpet and natural elements" className="h-full w-full object-cover" />
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Design Principles</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Tibetan carpets work best when they are allowed to be what they are — not camouflaged
            into a neutral interior but given space to speak. A few principles:
          </p>
          <ul className="space-y-3 text-muted-foreground leading-relaxed mb-4">
            <li><strong>Let the carpet lead.</strong> A Tibetan carpet has strong visual presence. Build the surrounding palette around its colors rather than competing with them. Warm woods, natural linens, and muted walls let the carpet's colors breathe.</li>
            <li><strong>Embrace texture contrast.</strong> The dense, tactile surface of a hand-knotted wool carpet gains impact when contrasted with smooth surfaces — polished concrete, glass, lacquered wood.</li>
            <li><strong>Honor the orientation.</strong> Tibetan carpets have a top and bottom, a directional flow. Dragons face forward; borders frame the composition. Place the carpet so its design makes sense from the primary viewing angle.</li>
            <li><strong>Create a destination.</strong> Unlike conventional rugs that fill floor space, Tibetan carpets — especially khaden — create destinations. Give them breathing room rather than crowding them with furniture.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">More Than Decoration</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A Tibetan carpet in a modern home does more than decorate. It introduces a different
            way of relating to the floor — not as empty space to be filled but as a surface to
            be inhabited. It invites you to sit down. In a culture that spends most of its time
            in chairs, at desks, on the move, the carpet's quiet invitation — rest here, stay
            awhile — is perhaps its most valuable offering.
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
