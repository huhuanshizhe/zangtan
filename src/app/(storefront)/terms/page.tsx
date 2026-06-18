import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Woven Plateau",
  description: "Terms and conditions for using the Woven Plateau website and purchasing our handwoven Tibetan carpets.",
};

export default function TermsPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 2026</p>

        <section className="mb-8">
          <h2 className="font-serif text-xl text-foreground mb-3">Handmade Products</h2>
          <p className="text-muted-foreground leading-relaxed">
            Every Woven Plateau carpet is handwoven by individual artisans. As such, each piece is unique. 
            Slight variations in color, pattern alignment, and dimensions are inherent to the handcraft 
            process and are not considered defects. These variations are the signature of authentic 
            handwork and contribute to the character of your piece.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl text-foreground mb-3">Orders & Production</h2>
          <p className="text-muted-foreground leading-relaxed">
            Each carpet is handwoven to order. Production times vary by piece but typically range from 
            4 to 12 weeks. We will communicate your estimated production timeline after your order is 
            confirmed. You will receive updates as your piece moves through the weaving process.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl text-foreground mb-3">Pricing & Payment</h2>
          <p className="text-muted-foreground leading-relaxed">
            All prices are listed in US Dollars. We accept major credit cards through Stripe. Your card 
            will be charged at the time of order. Prices do not include shipping costs, customs duties, 
            or import taxes, which are the responsibility of the buyer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl text-foreground mb-3">Shipping</h2>
          <p className="text-muted-foreground leading-relaxed">
            We ship worldwide. Shipping costs are calculated at checkout based on destination and order 
            value. Free shipping is available on orders over $500 USD. Estimated delivery time is 7-14 
            business days after production is complete. The customer is responsible for any customs 
            duties or import taxes imposed by the destination country.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl text-foreground mb-3">Returns & Refunds</h2>
          <p className="text-muted-foreground leading-relaxed">
            Due to the handcrafted, made-to-order nature of our products, we do not accept returns for 
            change of mind. If your piece arrives damaged or with a manufacturing defect, please contact 
            us within 7 days of delivery with photographs. We will arrange repair, replacement, or refund 
            at our discretion. See our Shipping & Returns page for full details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl text-foreground mb-3">Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            All content on this website — including text, images, and design — is the property of Woven 
            Plateau and is protected by copyright law. Traditional carpet patterns and motifs belong to 
            the cultural heritage of the Tibetan people and are used with respect.
          </p>
        </section>
      </div>
    </div>
  );
}
