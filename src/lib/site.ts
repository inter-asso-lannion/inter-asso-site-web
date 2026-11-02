import type { Metadata } from "next";

/** Informations centrales du site — utilisées par les pages, le SEO et le JSON-LD. */
export const SITE = {
  url: "https://inter-asso.fr",
  name: "Inter-Asso IUT Lannion",
  legalName: "Inter-Asso IUT de Lannion",
  description:
    "L'Inter-Asso rassemble les clubs étudiants de l'IUT de Lannion : BDE MMI, BDE MP, BDE INFO, BDE R&T, BPM et LocalDreamer. Découvrez nos événements, partenaires et activités.",
  email: "hello@inter-asso.fr",
  logo: "/images/clubs/Logo-Inter-Asso.webp",
  /** Image de partage réseaux sociaux, 1200×630 */
  ogImage: {
    url: "/images/og-inter-asso.png",
    width: 1200,
    height: 630,
    alt: "Inter-Asso IUT de Lannion, le cœur de la vie étudiante",
  },
  address: {
    street: "7 Rue Édouard Branly",
    postalCode: "22300",
    city: "Lannion",
    country: "FR",
  },
  social: {
    instagram: "https://instagram.com/inter_asso",
    facebook: "https://facebook.com/interasso22",
    discord: "https://discord.gg/BG62QR77pP",
    github: "https://github.com/inter-asso-lannion/inter-asso-site-web",
  },
} as const;

/** Transforme un chemin relatif en URL absolue (requis pour le JSON-LD et Open Graph). */
export function absoluteUrl(path: string) {
  return new URL(path, SITE.url).toString();
}

/**
 * Métadonnées d'une page : titre, description, URL canonique et Open Graph.
 * Open Graph est remplacé (et non fusionné) par Next.js, d'où la répétition de siteName/locale.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: SITE.name,
      title,
      description,
      url: path,
      images: [SITE.ogImage],
    },
    twitter: { card: "summary_large_image", images: [SITE.ogImage.url] },
  };
}
