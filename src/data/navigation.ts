export type NavLink = { href: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/clubs", label: "Clubs" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/evenements", label: "Événements" },
];

export const FOOTER_LINKS: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/clubs", label: "Nos clubs" },
  { href: "/evenements", label: "Événements" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/contact", label: "Contact" },
  { href: "/mentions-legales", label: "Mentions légales" },
];
