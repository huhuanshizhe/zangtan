import { Save } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Configure your store
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors">
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>

      <div className="max-w-2xl space-y-8">
        {/* Store Info */}
        <section>
          <h2 className="font-serif text-lg text-foreground mb-4">
            Store Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Store Name
              </label>
              <input
                type="text"
                defaultValue="Woven Plateau"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Tagline
              </label>
              <input
                type="text"
                defaultValue="A rug to live on, not just walk on."
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Contact Email
              </label>
              <input
                type="email"
                defaultValue="hello@wovenplateau.com"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </section>

        {/* Shipping */}
        <section className="border-t border-border pt-8">
          <h2 className="font-serif text-lg text-foreground mb-4">Shipping</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Free Shipping Threshold (USD)
              </label>
              <input
                type="number"
                defaultValue={500}
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Flat Rate Shipping (USD)
              </label>
              <input
                type="number"
                defaultValue={35}
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Estimated Delivery
              </label>
              <input
                type="text"
                defaultValue="7-14 business days"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </section>

        {/* Currency */}
        <section className="border-t border-border pt-8">
          <h2 className="font-serif text-lg text-foreground mb-4">Currency</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Exchange rates are updated daily from open exchange rate APIs.
            Base currency is USD.
          </p>
          <div className="rounded-md border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground uppercase">
                    Currency
                  </th>
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground uppercase">
                    Rate (per 1 USD)
                  </th>
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { code: "USD", rate: "1.00", status: "Base" },
                  { code: "EUR", rate: "0.92", status: "Active" },
                  { code: "GBP", rate: "0.79", status: "Active" },
                  { code: "JPY", rate: "149.50", status: "Active" },
                  { code: "AUD", rate: "1.53", status: "Active" },
                  { code: "CAD", rate: "1.36", status: "Active" },
                ].map((c) => (
                  <tr key={c.code}>
                    <td className="px-4 py-2 font-medium">{c.code}</td>
                    <td className="px-4 py-2 text-muted-foreground">
                      {c.rate}
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-xs text-jade">{c.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
