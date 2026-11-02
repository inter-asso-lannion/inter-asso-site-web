import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { IconInstagram } from "@/components/icons";
import { clubs } from "@/data/clubs";
import ClubBadge from "@/components/ClubBadge";
import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Nos Clubs",
  description:
    "Découvrez les 6 clubs de l'Inter-Asso IUT de Lannion : BDE MMI, BDE MP, BDE INFO, BDE R&T, BPM et LocalDreamer. Rejoignez le club qui vous correspond !",
  path: "/clubs",
});

export default function ClubsPage() {
  return (
    <>
      <PageHeader
        title="Nos Clubs"
        path="/clubs"
        lead="Découvre les 6 clubs de l'Inter-Asso et rejoins celui qui te correspond !"
      />

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <ol className="space-y-0">
          {clubs.map((club) => (
            <li
              key={club.id}
              id={club.id}
              className="grid gap-8 border-t-2 border-ink py-12 md:grid-cols-[13rem_1fr] md:gap-12"
            >
              <ClubBadge club={club} size="lg" />

              <article>
                <h2 className="display text-5xl md:text-6xl">{club.nom}</h2>
                <p className="mt-3 inline-flex items-center gap-2 font-semibold">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: club.couleur }}
                    aria-hidden="true"
                  />
                  {club.departement}
                </p>
                <p className="mt-5 max-w-2xl text-lg">{club.description}</p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {club.reseaux.instagram && (
                    <a
                      href={club.reseaux.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-semibold text-paper hover:bg-magenta"
                    >
                      <IconInstagram className="h-5 w-5" />
                      Instagram<span className="sr-only"> de {club.nom}</span>
                    </a>
                  )}
                  {club.reseaux.email && (
                    <a
                      href={`mailto:${club.reseaux.email}`}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2 font-semibold hover:bg-jaune"
                    >
                      <EnvelopeIcon className="h-5 w-5" />
                      {club.reseaux.email}
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>

        <section className="mt-8 rounded-lg bg-granit p-8 md:p-12">
          <h2 className="display text-4xl md:text-5xl">Envie de rejoindre un club ?</h2>
          <p className="mt-4 max-w-xl text-lg">
            Contacte directement le club qui t&apos;intéresse via Instagram ou par email !
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-ink px-6 py-3 font-semibold text-paper hover:bg-magenta"
          >
            Nous contacter
          </Link>
        </section>
      </div>
    </>
  );
}
