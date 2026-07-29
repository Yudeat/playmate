import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.playmatesapp.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Playmates — Every Sport. Every Venue. One Platform.",
    template: "%s | Playmates",
  },
  description:
    "Book sports venues, find coaches, join tournaments and marathons, and match with teammates near you — all in one app. Instant bookings, verified venues.",
  keywords: [
    "sports venue booking",
    "book a court",
    "find playmates",
    "sports coaches near me",
    "tournaments and marathons app",
    "Playmates app",
  ],
  applicationName: "Playmates",
  authors: [{ name: "Playmates" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Playmates",
    title: "Playmates — Every Sport. Every Venue. One Platform.",
    description:
      "Book sports venues, find coaches, join tournaments and marathons, and match with teammates near you — all in one app.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Playmates app" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playmates — Every Sport. Every Venue. One Platform.",
    description:
      "Book sports venues, find coaches, join tournaments and marathons, and match with teammates near you.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Playmates",
  applicationCategory: "SportsApplication",
  operatingSystem: "iOS, Android",
  url: SITE_URL,
  description:
    "Playmates is a sports venue and events aggregator app for booking venues, finding coaches, joining tournaments and marathons, and matching with teammates.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
