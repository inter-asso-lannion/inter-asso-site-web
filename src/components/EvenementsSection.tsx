import Link from "next/link";
import { evenements } from "@/data/evenements";
import { dateEvenement } from "@/lib/dates";

/** Les dernières affiches (format portrait uniquement, pour un alignement propre). */
export default function EvenementsSection() {
  const affiches = evenements.filter((e) => e.hauteur > e.largeur).slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28" aria-labelledby="titre-evenements">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 id="titre-evenements" className="display text-5xl md:text-7xl">
            Événements
          </h2>
          <p className="mt-4 max-w-lg text-lg text-muted">
            Retrouve tous les événements organisés par l&apos;Inter-Asso et les clubs de l&apos;IUT
            de Lannion.
          </p>
        </div>
        <Link
          href="/evenements"
          className="self-start rounded-full border-2 border-ink px-6 py-2.5 font-semibold hover:bg-jaune md:self-auto"
        >
          Voir tous les événements
        </Link>
      </div>

      <ul className="-mx-4 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
        {affiches.map((e) => (
          <li key={e.id} className="w-[70%] shrink-0 snap-start sm:w-[45%] md:w-auto">
            <figure>
              <img
                src={e.image}
                alt={`Affiche : ${e.titre}`}
                width={e.largeur}
                height={e.hauteur}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <figcaption className="mt-3">
                <span className="block font-semibold">{e.titre}</span>
                <span className="block text-sm text-muted">
                  {dateEvenement(e)}
                  {e.lieu && `, ${e.lieu.nom}`}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
