import type { Club } from "@/data/clubs";

const SIZES = {
  sm: "h-12 w-12 border-[3px] text-xs",
  md: "h-20 w-20 border-4 text-base",
  lg: "h-36 w-36 md:h-44 md:w-44 border-[6px] text-3xl",
} as const;

/**
 * Logo rond d'un club, cerclé de sa couleur — même principe que le badge Inter-Asso.
 * Sans logo, on affiche le sigle sur la couleur du club.
 */
export default function ClubBadge({
  club,
  size = "md",
}: {
  club: Club;
  size?: keyof typeof SIZES;
}) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full ${SIZES[size]}`}
      style={{
        borderColor: club.couleur,
        backgroundColor: club.logo ? (club.logoFit === "contain" ? club.couleur : "#ffffff") : club.couleur,
        color: club.texteSurCouleur,
      }}
    >
      {club.logo ? (
        <img
          src={club.logo}
          alt={`Logo ${club.nom}`}
          width={176}
          height={176}
          loading="lazy"
          decoding="async"
          className={`h-full w-full ${club.logoFit === "contain" ? "object-contain p-1" : "object-cover"}`}
        />
      ) : (
        <span className="display" aria-hidden="true">
          {club.sigle}
        </span>
      )}
    </span>
  );
}
