import Link from "next/link";
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react";

export default async function OrderSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  const sessionId = params.session_id;

  return (
    <div className="py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <CheckCircle className="h-16 w-16 text-jade mx-auto" strokeWidth={1.5} />
        </div>

        <h1 className="font-serif text-4xl text-foreground mb-3">
          Thank You
        </h1>
        <p className="text-lg text-muted-foreground mb-2">
          Your order has been confirmed.
        </p>
        {sessionId && (
          <p className="text-xs text-muted-foreground/60 mb-8">
            Order reference: {sessionId.slice(-8).toUpperCase()}
          </p>
        )}

        <div className="max-w-md mx-auto space-y-6 text-left my-12">
          <div className="flex items-start gap-4 p-4 rounded-md bg-secondary/50">
            <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Confirmation Email Sent
              </p>
              <p className="text-sm text-muted-foreground">
                A detailed receipt has been sent to your email address. Please
                check your inbox and spam folder.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-md bg-secondary/50">
            <Package className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Shipping Information
              </p>
              <p className="text-sm text-muted-foreground">
                Your carpet will be carefully wrapped and shipped within 2-3
                business days. Expected delivery: 7-14 business days. You will
                receive a tracking number once shipped.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-12">
          <p className="text-sm text-muted-foreground mb-6">
            Each carpet comes with a certificate of authenticity and origin.
            If you have any questions, please don&apos;t hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collection"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground text-background px-8 py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Continue Exploring
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-8 py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
