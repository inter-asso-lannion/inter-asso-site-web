import Link from "next/link";
import { clubs } from "@/data/clubs";
import ClubBadge from "@/components/ClubBadge";

export default function ClubsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28" aria-labelledby="titre-clubs">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 id="titre-clubs" className="display text-5xl md:text-7xl">
            Nos clubs
          </h2>
          <p className="mt-4 max-w-lg text-lg text-muted">
            Rejoins un de nos {clubs.length} clubs et participe à la vie étudiante de l&apos;IUT !
          </p>
        </div>
        <Link
          href="/clubs"
          className="self-start rounded-full border-2 border-ink px-6 py-2.5 font-semibold hover:bg-jaune md:self-auto"
        >
          Découvrir tous nos clubs
        </Link>
      </div>

      <ul className="mt-14 grid gap-x-12 sm:grid-cols-2">
        {clubs.map((club) => (
          <li key={club.id} className="border-t-2 border-ink">
            <Link
              href={`/clubs#${club.id}`}
              className="group flex items-center gap-5 py-5"
            >
              <ClubBadge club={club} />
              <span>
                <span className="display block text-3xl group-hover:underline group-hover:decoration-[3px] group-hover:underline-offset-4">
                  {club.nom}
                </span>
                <span className="mt-1 block text-muted">{club.departement}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
