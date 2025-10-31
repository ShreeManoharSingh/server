import Hero from "@/components/hero/hero";
import Properties from "@/components/screens/properties/properties";
import Testimonials from "@/components/screens/properties/testimonials";
import Team from "@/components/screens/properties/team";
import Script from "next/script";

// ✅ Metadata for SEO
export const metadata = {
  title: "Uday Real Estate Developers | Luxury Living & Premium Projects",
  description:
    "Uday Real Estate Developers specialize in luxury homes, premium commercial spaces, and modern lifestyle properties crafted with trust, quality, and innovation.",
  keywords: [
    "Uday Real Estate",
    "Luxury real estate developers",
    "Premium property developers",
    "Luxury homes India",
    "Real estate projects",
  ],
  alternates: {
    canonical: "https://www.udayrealestate.in/",
  },
  openGraph: {
    title: "Uday Real Estate Developers",
    description:
      "Building luxury lifestyles with trust, quality & innovation",
    url: "https://www.udayrealestate.in/",
    type: "website",
    siteName: "Uday Real Estate",
    images: [
      {
        url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
        width: 1200,
        height: 630,
        alt: "Uday Real Estate Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uday Real Estate Developers",
    description: "Building luxury lifestyles with trust and excellence.",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471"
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  authors: [{ name: "Uday Real Estate Developers" }],
  category: "Real Estate",
};

// ✅ JSON-LD Schema Markup
const schemaData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Uday Real Estate Developers",
  url: "https://www.udayrealestate.in/",
  image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
  slogan: "Building luxury lifestyles with trust, quality & innovation",
  description:
    "Leading luxury real estate developers offering premium living spaces & commercial properties.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "India",
  },
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://linkedin.com",
  ],
};

export default function HomePage() {
  return (
    <>
      {/* ✅ Inject Schema Markup */}
      <Script
        id="schema-markup"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-blue-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
        <Hero
          image="https://images.unsplash.com/photo-1501183638710-841dd1904471"
          title="Uday Real Estate Developers"
          subtitle="Building luxury lifestyles with trust, quality & innovation"
        />
        <Properties />
        <Testimonials />
        <Team />
      </main>
    </>
  );
}
