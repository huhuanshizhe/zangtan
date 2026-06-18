export default function AboutPage() {
  return (
    <div>
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src="/images/about/about-workshop.png"
          alt="Traditional Tibetan carpet weaving workshop"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 pb-16 w-full text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-4">
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-white">
              Bringing the plateau
              <br />
              to your home
            </h1>
          </div>
        </div>
      </section>

      <div className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Woven Plateau connects discerning collectors around the world with
            authentic, handwoven Tibetan carpets — textiles born from one of the
            world&apos;s most demanding environments and richest cultural
            traditions.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            We work directly with weavers and workshops on the Tibetan plateau,
            ensuring that each carpet in our collection is made using traditional
            techniques: highland wool, hand-spinning, natural dyes where
            possible, and the distinctive Tibetan knot that has been passed down
            through generations.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Our mission is simple: to preserve a living textile tradition and
            share it with a global audience that values craftsmanship, cultural
            depth, and the beauty of handmade objects. Every piece we sell comes
            with its story — the materials, the motifs, the artisan, and the
            place it comes from.
          </p>

          <div className="border-t border-border pt-8 mt-12">
            <h2 className="font-serif text-2xl text-foreground mb-6">
              What We Believe
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg text-primary/60 shrink-0">01</span>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">
                    Authenticity over imitation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Every carpet is woven on the Tibetan plateau by Tibetan
                    artisans using traditional methods. We do not sell
                    machine-made reproductions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg text-primary/60 shrink-0">02</span>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">
                    Story over specification
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Each piece carries a narrative — about its wool, its weaver,
                    its patterns, and the culture that shaped it. We share that
                    story with every listing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg text-primary/60 shrink-0">03</span>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">
                    Living tradition, not museum piece
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Tibetan carpets are meant to be used — sat on, slept on,
                    lived with. They gain character through time and touch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Contact
            </h2>
            <p className="text-muted-foreground">
              For inquiries about specific pieces, custom commissions, or
              wholesale opportunities, please reach out to us at{" "}
              <a
                href="mailto:hello@wovenplateau.com"
                className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
              >
                hello@wovenplateau.com
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
