import Link from "next/link";
import { clubs } from "@/data/clubs";
import { evenements } from "@/data/evenements";

// Trois affiches récentes, posées en éventail (position finale : décalage x/y + rotation)
const POSTERS = [
  { id: "up-ta-rentree-2025", x: "-34%", y: "6%", r: "-9deg" },
  { id: "halloween-party-2025", x: "30%", y: "3%", r: "7deg" },
  { id: "up-ton-noel-2025", x: "0%", y: "-4%", r: "-1.5deg" },
];

export default function Hero() {
  const posters = POSTERS.map((p) => ({
    ...p,
    event: evenements.find((e) => e.id === p.id)!,
  }));

  return (
    <section className="overflow-hidden border-b-2 border-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-16 md:grid-cols-[1.15fr_1fr] md:px-6 md:pt-20 md:pb-24">
        <div>
          <h1 className="display">
            <span className="block whitespace-nowrap text-[clamp(3.5rem,13vw,9.5rem)]">
              L&apos;Inter-Asso
            </span>
            <span className="mt-2 block text-[clamp(2rem,6vw,4.25rem)]">
              de l&apos;IUT de Lannion
            </span>
          </h1>
          <p className="narrow mt-8 text-2xl font-bold md:text-3xl">Le cœur de la vie étudiante</p>
          <p className="mt-3 max-w-xl text-lg md:text-xl">
            Clubs, événements, partenariats et initiatives étudiantes : l&apos;Inter-Asso
            rassemble, dynamise et fait vivre la communauté de l&apos;IUT de Lannion.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/clubs"
              className="rounded-full bg-ink px-7 py-3.5 text-center font-semibold text-paper hover:bg-magenta"
            >
              Découvrir les clubs
            </Link>
            <Link
              href="/evenements"
              className="rounded-full border-2 border-ink px-7 py-3 text-center font-semibold hover:bg-jaune"
            >
              Voir les événements
            </Link>
          </div>

          {/* Les six pastilles du logo : une par club */}
          <ul className="mt-12 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
            {clubs.map((club) => (
              <li key={club.id}>
                <Link
                  href={`/clubs#${club.id}`}
                  className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
                >
                  <span
                    className="h-3.5 w-3.5 rounded-full"
                    style={{ backgroundColor: club.couleur }}
                    aria-hidden="true"
                  />
                  {club.nom}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/evenements"
          className="group relative mx-auto block aspect-4/5 w-full max-w-sm md:max-w-md"
          aria-label="Voir toutes les soirées de l'Inter-Asso"
        >
          {posters.map(({ id, x, y, r, event }, i) => (
            <img
              key={id}
              src={event.image}
              alt={`Affiche : ${event.titre}, ${event.date}`}
              width={event.largeur}
              height={event.hauteur}
              fetchPriority={i === posters.length - 1 ? "high" : "low"}
              decoding="async"
              className="poster absolute inset-x-[15%] top-[6%] w-[70%] border-[6px] border-paper shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)]"
              style={{ "--x": x, "--y": y, "--r": r } as React.CSSProperties}
            />
          ))}
        </Link>
      </div>
    </section>
  );
}
