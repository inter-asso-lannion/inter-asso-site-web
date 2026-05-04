import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://inter-asso.fr";
const SITE_NAME = "Inter-Asso IUT Lannion";
const SITE_DESCRIPTION =
  "L'Inter-Asso rassemble les clubs étudiants de l'IUT de Lannion : BDE MMI, BDE MP, BDE INFO, BDE R&T, BPM et LocalDreamer. Découvrez nos événements, partenaires et activités.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s - ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/clubs/Logo-Inter-Asso.webp",
        width: 400,
        height: 400,
        alt: `Logo ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/clubs/Logo-Inter-Asso.webp"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Inter-Asso IUT de Lannion",
  url: SITE_URL,
  logo: `${SITE_URL}/images/clubs/Logo-Inter-Asso.webp`,
  description: SITE_DESCRIPTION,
  email: "hello@inter-asso.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rue Édouard Branly",
    addressLocality: "Lannion",
    postalCode: "22300",
    addressCountry: "FR",
  },
  sameAs: [
    "https://instagram.com/inter_asso",
    "https://facebook.com/interasso22",
    "https://discord.gg/BG62QR77pP",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900">
        {/* JSON-LD structuré pour les moteurs de recherche */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
