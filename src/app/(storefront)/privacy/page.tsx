import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Woven Plateau",
  description: "How we collect, use, and protect your personal information when you visit or make a purchase from Woven Plateau.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 2026</p>

        <section className="mb-8">
          <h2 className="font-serif text-xl text-foreground mb-3">Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you place an order or sign up for our newsletter, we collect the information you provide — 
            your name, email address, shipping address, and payment details. Payment information is processed 
            securely through Stripe and is never stored on our servers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl text-foreground mb-3">How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">We use your information to:</p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground leading-relaxed">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your order status</li>
            <li>Send you updates about new arrivals if you have subscribed</li>
            <li>Improve our website and customer experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl text-foreground mb-3">Data Protection</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement appropriate security measures to protect your personal information. Your data is 
            stored on secure servers and transmitted using SSL encryption. We do not sell, trade, or share 
            your personal information with third parties except as necessary to fulfill your order.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl text-foreground mb-3">Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use cookies to remember your currency preference and shopping cart contents. These are 
            functional cookies essential to the operation of our store. We do not use tracking cookies 
            for advertising purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl text-foreground mb-3">Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You may request to access, correct, or delete your personal data at any time. To exercise 
            these rights, please contact us at hello@wovenplateau.com. We will respond within 30 days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-xl text-foreground mb-3">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions about this privacy policy, please contact us at hello@wovenplateau.com.
          </p>
        </section>
      </div>
    </div>
  );
}
