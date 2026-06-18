import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Woven Plateau — Authentic Handwoven Tibetan Carpets",
    template: "%s | Woven Plateau",
  },
  description:
    "Discover authentic handwoven Tibetan carpets — khaden, drumtse, and temple rugs crafted from highland wool using centuries-old techniques. Each piece is a unique work of art from the Tibetan plateau.",
  keywords: [
    "Tibetan carpet",
    "Tibetan rug",
    "khaden",
    "drumtse",
    "handwoven rug",
    "Tibetan textile",
    "highland wool",
    "handmade carpet",
    "Tibetan knot",
    "antique rug",
    "artisan carpet",
    "luxury handmade rug",
    "Tibetan craftsmanship",
    "natural dye rug",
    "temple rug",
    "saddle rug",
  ],
  authors: [{ name: "Woven Plateau" }],
  creator: "Woven Plateau",
  publisher: "Woven Plateau",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://wovenplateau.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Woven Plateau",
    title: "Woven Plateau — Authentic Handwoven Tibetan Carpets",
    description:
      "Authentic handwoven Tibetan carpets from the roof of the world. Each piece is a unique work of art — woven from highland wool using techniques passed down through generations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woven Plateau — Handwoven Tibetan Carpets",
    description:
      "Discover authentic handwoven Tibetan carpets crafted from highland wool.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
