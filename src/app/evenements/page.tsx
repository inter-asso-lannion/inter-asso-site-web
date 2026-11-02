import { IconInstagram } from "@/components/icons";
import { evenements } from "@/data/evenements";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { dateEvenement } from "@/lib/dates";
import { SITE, absoluteUrl, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Événements",
  description:
    "Retrouve tous les événements organisés par l'Inter-Asso et les clubs de l'IUT de Lannion : soirées, sorties, séjours ski et plus encore.",
  path: "/evenements",
});

/** Données structurées Event, uniquement pour les événements dont la date et le lieu sont connus. */
const evenementsJsonLd = evenements
  .filter((e) => e.debut && e.lieu)
  .map((e) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.titre,
    description: e.description,
    startDate: e.debut,
    ...(e.fin && { endDate: e.fin }),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: [absoluteUrl(e.image)],
    location: {
      "@type": "Place",
      name: e.lieu!.nom,
      address: {
        "@type": "PostalAddress",
        ...(e.lieu!.rue && { streetAddress: e.lieu!.rue }),
        ...(e.lieu!.codePostal && { postalCode: e.lieu!.codePostal }),
        addressLocality: e.lieu!.ville,
        addressCountry: "FR",
      },
    },
  }));

export default function EvenementsPage() {
  return (
    <>
      <PageHeader
        title="Événements"
        path="/evenements"
        lead="Retrouve tous les événements organisés par l'Inter-Asso et les clubs de l'IUT de Lannion."
      />
      {evenementsJsonLd.map((data) => (
        <JsonLd key={data.name} data={data} />
      ))}

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        {/* Mur d'affiches, du plus récent au plus ancien : chaque affiche garde son format d'origine */}
        <ul className="grid items-start gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {evenements.map((e) => (
            <li key={e.id}>
              <article>
                <img
                  src={e.image}
                  alt={`Affiche : ${e.titre}`}
                  width={e.largeur}
                  height={e.hauteur}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-sm"
                />
                <h2 className="display mt-4 text-3xl">{e.titre}</h2>
                <p className="mt-1 font-semibold">
                  <time dateTime={e.debut}>{dateEvenement(e)}</time>
                  {e.lieu && <>, {e.lieu.nom}</>}
                </p>
                {e.prix && <p className="text-muted">{e.prix}</p>}
                <p className="mt-2 text-muted">{e.description}</p>
              </article>
            </li>
          ))}
        </ul>

        <section className="mt-8 rounded-lg bg-granit p-8 md:p-12">
          <h2 className="display text-4xl md:text-5xl">Reste informé des prochains événements</h2>
          <p className="mt-4 max-w-xl text-lg">Suis notre Instagram pour ne rater aucun événement !</p>
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-paper hover:bg-magenta"
          >
            <IconInstagram className="h-5 w-5" />
            Suivre sur Instagram
          </a>
        </section>
      </div>
    </>
  );
}
