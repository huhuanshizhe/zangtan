import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-serif text-xl font-semibold tracking-widest text-foreground"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Handwoven on the Tibetan plateau using highland wool and centuries-old techniques.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Collection
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.categories.slice(0, 4).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/collection/${cat.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/collection"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              About
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/story"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/story/craftsmanship"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-returns"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Stay Connected
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Receive updates on new arrivals and the stories behind our collection.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
