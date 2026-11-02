import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { clubs } from "@/data/clubs";
import { SITE, absoluteUrl } from "@/lib/site";

// Archivo variable avec l'axe de largeur : étroit pour les titres, normal pour le texte
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: `%s - ${SITE.name}`,
    default: SITE.name,
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    url: "/",
    images: [SITE.ogImage],
  },
  twitter: { card: "summary_large_image", images: [SITE.ogImage.url] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const organisation = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organisation`,
      name: SITE.legalName,
      alternateName: "Inter-Asso",
      url: SITE.url,
      logo: absoluteUrl(SITE.logo),
      description: SITE.description,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        postalCode: SITE.address.postalCode,
        addressLocality: SITE.address.city,
        addressCountry: SITE.address.country,
      },
      sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.discord],
      subOrganization: clubs.map((club) => ({
        "@type": "Organization",
        name: club.nom,
        description: club.description,
        url: absoluteUrl(`/clubs#${club.id}`),
        ...(club.reseaux.email && { email: club.reseaux.email }),
        ...(club.reseaux.instagram && { sameAs: [club.reseaux.instagram] }),
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#site`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE.url}/#organisation` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={archivo.variable}>
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-jaune focus:px-5 focus:py-3 focus:font-semibold"
        >
          Aller au contenu
        </a>
        <JsonLd data={organisation} />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
