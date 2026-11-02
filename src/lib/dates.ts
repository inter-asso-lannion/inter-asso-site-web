import type { Evenement } from "@/data/evenements";

const formatDate = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Paris",
});

/** "jeudi 11 décembre 2025" si la date précise est connue, sinon le champ `date`. */
export function dateEvenement(evenement: Evenement) {
  if (!evenement.debut) return evenement.date;
  const texte = formatDate.format(new Date(evenement.debut));
  return texte.charAt(0).toUpperCase() + texte.slice(1);
}
