"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NAV_LINKS } from "@/data/navigation";
import { SITE } from "@/lib/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Referme le menu mobile quand on change de page
  useEffect(() => setIsOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 md:px-6"
        aria-label="Navigation principale"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Inter-Asso, accueil">
          <img src={SITE.logo} alt="" width={44} height={44} className="h-11 w-11" />
          <span className="leading-none">
            <span className="display block text-2xl">Inter-Asso</span>
            <span className="narrow block text-sm font-medium text-muted">IUT de Lannion</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className="relative py-2 font-semibold underline-offset-[6px] decoration-[3px] hover:underline aria-[current=page]:underline"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              className="rounded-full bg-ink px-5 py-2.5 font-semibold text-paper hover:bg-magenta"
            >
              Nous écrire
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="-mr-2 rounded-full p-2 md:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
        >
          {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </nav>

      {isOpen && (
        <div id="menu-mobile" className="border-t-2 border-ink md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-4">
            {[...NAV_LINKS, { href: "/contact", label: "Nous écrire" }].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className="display block py-3 text-4xl aria-[current=page]:text-magenta"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
