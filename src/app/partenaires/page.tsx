import {
  ArrowTopRightOnSquareIcon,
  ClockIcon,
  CreditCardIcon,
  ExclamationCircleIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { IconInstagram } from "@/components/icons";
import { partenaires } from "@/data/partenaires";
import PageHeader from "@/components/PageHeader";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Nos Partenaires",
  description:
    "Profitez d'avantages exclusifs chez nos partenaires locaux à Lannion : réductions, menus étudiants et offres spéciales sur présentation de votre carte Inter-Asso.",
  path: "/partenaires",
});

export default function PartenairesPage() {
  return (
    <>
      <PageHeader title="Nos Partenaires" path="/partenaires">
        <p className="mt-8 inline-flex items-center gap-3 rounded-full bg-paper px-5 py-3 font-semibold">
          <CreditCardIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
          Carte étudiante obligatoire pour bénéficier des avantages
        </p>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <ul>
          {partenaires.map((p) => (
            <li
              key={p.id}
              id={`partenaire-${p.id}`}
              className="grid gap-8 border-t-2 border-ink py-12 md:grid-cols-[13rem_1fr] md:gap-12"
            >
              <div className="flex h-40 w-40 items-center justify-center rounded-lg border-2 border-granit-deep bg-paper p-4 md:h-52 md:w-52">
                <img
                  src={p.logo}
                  alt={`Logo ${p.nom}`}
                  width={200}
                  height={200}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full w-full object-contain"
                />
              </div>

              <article>
                <p className="text-muted">{p.categorie}</p>
                <h2 className="display mt-1 text-5xl md:text-6xl">{p.nom}</h2>
                <p className="narrow mt-4 inline-block bg-jaune px-3 py-1 text-2xl font-extrabold md:text-3xl">
                  {p.reduction}
                </p>
                <p className="mt-5 max-w-2xl text-lg">{p.description}</p>

                <dl className="mt-6 grid max-w-2xl gap-3 text-[0.95rem] sm:grid-cols-2">
                  <div className="flex gap-2">
                    <dt>
                      <MapPinIcon className="h-5 w-5" />
                      <span className="sr-only">Adresse</span>
                    </dt>
                    <dd>{p.adresse}</dd>
                  </div>
                  {p.horaires && (
                    <div className="flex gap-2">
                      <dt>
                        <ClockIcon className="h-5 w-5" />
                        <span className="sr-only">Horaires</span>
                      </dt>
                      <dd>{p.horaires}</dd>
                    </div>
                  )}
                </dl>

                {p.notes && (
                  <p className="mt-5 flex max-w-2xl gap-2 font-semibold text-magenta">
                    <ExclamationCircleIcon className="h-5 w-5 shrink-0 translate-y-0.5" />
                    {p.notes}
                  </p>
                )}

                {(p.lien || p.instagram) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.lien && (
                      <a
                        href={p.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2 font-semibold hover:bg-jaune"
                      >
                        Site web
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                      </a>
                    )}
                    {p.instagram && (
                      <a
                        href={`https://instagram.com/${p.instagram.replace(/^@/, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2 font-semibold hover:bg-jaune"
                      >
                        <IconInstagram className="h-4 w-4" />
                        {p.instagram}
                      </a>
                    )}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ul>

        <section className="mt-8 rounded-lg bg-granit p-8 md:p-12">
          <h2 className="display text-4xl md:text-5xl">Comment devenir partenaire ?</h2>
          <p className="mt-4 max-w-xl text-lg">
            Envoie-nous un email à {SITE.email} en expliquant ton projet de partenariat.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=${encodeURIComponent("[Contact] Devenir partenaire")}`}
            className="mt-6 inline-block rounded-full bg-ink px-6 py-3 font-semibold text-paper hover:bg-magenta"
          >
            Écrire à l&apos;Inter-Asso
          </a>
        </section>
      </div>
    </>
  );
}
