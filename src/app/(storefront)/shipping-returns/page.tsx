export default function ShippingReturnsPage() {
  return (
    <div className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-foreground mb-12">
          Shipping & Returns
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Shipping
            </h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>
                We ship worldwide from our warehouse via DHL Express and FedEx
                International. Every carpet is carefully rolled, wrapped in
                acid-free tissue, and packed in a protective tube or box to
                ensure it arrives in perfect condition.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="border border-border rounded-sm p-4">
                  <p className="text-sm font-medium text-foreground mb-1">Standard Shipping</p>
                  <p className="text-sm text-muted-foreground">7–14 business days</p>
                  <p className="text-sm text-foreground mt-2">$25 flat rate</p>
                </div>
                <div className="border border-border rounded-sm p-4">
                  <p className="text-sm font-medium text-foreground mb-1">Express Shipping</p>
                  <p className="text-sm text-muted-foreground">3–5 business days</p>
                  <p className="text-sm text-foreground mt-2">$65 flat rate</p>
                </div>
              </div>
              <p>
                <strong className="text-foreground">Free shipping</strong> on all
                orders over $500 USD.
              </p>
              <p>
                A tracking number and link will be emailed to you once your
                order ships. Customs duties and import taxes are the
                responsibility of the recipient.
              </p>
            </div>
          </section>

          <section className="border-t border-border pt-12">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Returns
            </h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>
                We want you to be completely satisfied with your purchase. If for
                any reason you are not, you may return the item within 14 days
                of delivery for a full refund, provided the carpet is in its
                original, unused condition.
              </p>
              <p>
                To initiate a return, please contact us at{" "}
                <a
                  href="mailto:hello@wovenplateau.com"
                  className="text-foreground underline underline-offset-4"
                >
                  hello@wovenplateau.com
                </a>{" "}
                with your order number and reason for return. We will provide
                you with a return shipping label and instructions.
              </p>
              <p>
                Return shipping costs are covered by the customer unless the item
                arrived damaged or is defective.
              </p>
            </div>
          </section>

          <section className="border-t border-border pt-12">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Care Instructions
            </h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Tibetan carpets are made to be lived with. Regular vacuuming
                (without a beater bar) will keep your carpet clean. For spills,
                blot immediately with a clean, dry cloth — do not rub.
              </p>
              <p>
                For deeper cleaning, we recommend professional wool carpet
                cleaning every 2–3 years. Avoid prolonged direct sunlight, which
                can cause natural dyes to fade over time.
              </p>
              <p>
                Rotate your carpet periodically to ensure even wear. With proper
                care, a handwoven Tibetan carpet will last for generations and
                develop a beautiful patina.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
