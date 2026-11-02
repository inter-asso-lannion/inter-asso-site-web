import Link from "next/link";
import { partenaires } from "@/data/partenaires";

export default function PartenairesSection() {
  const selection = partenaires.filter((p) => p.accueil);

  return (
    <section className="bg-granit" aria-labelledby="titre-partenaires">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 id="titre-partenaires" className="display text-5xl md:text-7xl">
              Nos partenaires
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted">
              Ils nous soutiennent et nous font confiance
            </p>
          </div>
          <Link
            href="/partenaires"
            className="self-start rounded-full bg-ink px-6 py-3 font-semibold text-paper hover:bg-magenta md:self-auto"
          >
            Voir tous nos partenaires
          </Link>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {selection.map((p) => (
            <li key={p.id}>
              <Link
                href={`/partenaires#partenaire-${p.id}`}
                className="flex h-full items-center gap-5 rounded-lg bg-paper p-5 hover:outline-2 hover:outline-ink"
              >
                <img
                  src={p.logo}
                  alt={`Logo ${p.nom}`}
                  width={80}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-20 shrink-0 object-contain"
                />
                <span>
                  <span className="narrow block text-2xl leading-tight font-extrabold">
                    {p.reduction}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {p.nom}, {p.categorie.toLowerCase()}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
