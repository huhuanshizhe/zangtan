import { ContactChatCTA } from "@/components/chat/ContactChatCTA";

export default function ContactPage() {
  return (
    <div className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">
            Contact Us
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Whether you have a question about a specific piece, need help with
            sizing, or want to discuss a custom commission, we are here to help.
          </p>
        </div>

        {/* Instant Chat CTA */}
        <ContactChatCTA />

        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <select className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring text-muted-foreground">
                <option>General Inquiry</option>
                <option>Question About a Piece</option>
                <option>Custom Commission</option>
                <option>Order Status</option>
                <option>Wholesale Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                rows={6}
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-foreground text-background py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Or reach us directly at
            </p>
            <a
              href="mailto:hello@wovenplateau.com"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              hello@wovenplateau.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
