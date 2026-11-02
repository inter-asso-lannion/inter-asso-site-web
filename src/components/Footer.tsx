import Link from "next/link";
import { FOOTER_LINKS } from "@/data/navigation";
import { clubs } from "@/data/clubs";
import { SITE } from "@/lib/site";
import { IconFacebook, IconInstagram, IconGithub } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      {/* Appel à écrire — commun à toutes les pages */}
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 md:px-6">
        <h2 className="display max-w-3xl text-5xl md:text-7xl">Une question ? Contacte-nous !</h2>
        <p className="mt-6 max-w-xl text-lg text-paper/75">
          Notre équipe est là pour répondre à toutes tes questions
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-full bg-jaune px-7 py-3.5 text-center font-semibold text-ink hover:bg-paper"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.social.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-paper/60 px-7 py-3 text-center font-semibold hover:border-paper"
          >
            Rejoindre le Discord
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 border-t border-paper/20 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div className="flex items-start gap-4">
          <img src={SITE.logo} alt="" width={64} height={64} className="h-16 w-16" loading="lazy" />
          <div>
            <p className="font-semibold">{SITE.legalName}</p>
            <p className="mt-1 max-w-xs text-sm text-paper/70">
              L&apos;association qui rassemble tous les clubs et dynamise la vie étudiante de
              l&apos;IUT de Lannion.
            </p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-paper/70">
              IUT de Lannion
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.postalCode} {SITE.address.city}
            </address>
            {/* Les six pastilles, une par club */}
            <ul className="mt-5 flex gap-2" aria-label="Les clubs de l'Inter-Asso">
              {clubs.map((club) => (
                <li key={club.id}>
                  <Link
                    href={`/clubs#${club.id}`}
                    title={club.nom}
                    aria-label={club.nom}
                    className="block h-4 w-4 rounded-full ring-1 ring-paper/30 hover:scale-125"
                    style={{ backgroundColor: club.couleur }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav aria-label="Pied de page">
          <ul className="space-y-2 text-paper/80">
            {FOOTER_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-paper hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ul className="flex gap-3">
            <li>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de l'Inter-Asso"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/40 hover:bg-paper hover:text-ink"
              >
                <IconInstagram />
              </a>
            </li>
            <li>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de l'Inter-Asso"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/40 hover:bg-paper hover:text-ink"
              >
                <IconFacebook />
              </a>
            </li>
          </ul>
          <a
            href={SITE.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-paper/70 hover:text-paper"
          >
            <IconGithub />
            Contribuer au projet sur GitHub
          </a>
        </div>
      </div>

      <p className="mx-auto max-w-6xl px-4 pb-8 text-sm text-paper/60 md:px-6">
        © {new Date().getFullYear()} {SITE.legalName}, association loi 1901.
      </p>
    </footer>
  );
}
