export type Evenement = {
  id: string;
  titre: string;
  /** Date courte, affichée quand il n'y a pas de date précise (`debut`) */
  date: string;
  /** Date et heure de début au format ISO 8601, lues sur l'affiche (active les données structurées Event) */
  debut?: string;
  fin?: string;
  lieu?: {
    nom: string;
    rue?: string;
    codePostal?: string;
    ville: string;
  };
  prix?: string;
  description: string;
  /** Affiche ou photo dans public/images/evenements/ */
  image: string;
  /** Dimensions réelles de l'image en pixels (évite les sauts de mise en page) */
  largeur: number;
  hauteur: number;
};

/** Du plus récent au plus ancien. */
export const evenements: Evenement[] = [
  {
    id: "mood-club-decembre-2025",
    titre: "Mood Club Décembre 2025",
    date: "Décembre 2025",
    debut: "2025-12-18T23:00:00+01:00",
    lieu: {
      nom: "Mood Club",
      rue: "4 Rue de Goas Huet",
      codePostal: "22700",
      ville: "Saint-Quay-Perros",
    },
    prix: "10 € avec une consommation",
    description: "Une soirée exceptionnelle au Mood Club.",
    image: "/images/evenements/mood-club-decembre-2025.webp",
    largeur: 1151,
    hauteur: 1458,
  },
  {
    id: "up-ton-noel-2025",
    titre: "Up ton Noël 2025",
    date: "2025",
    debut: "2025-12-11T20:00:00+01:00",
    fin: "2025-12-12T01:00:00+01:00",
    lieu: { nom: "Salle des Ursulines", codePostal: "22300", ville: "Lannion" },
    prix: "3 € en prévente, 5 € sur place",
    description: "La soirée de Noël de l'Inter-Asso.",
    // Version allégée (990 px, 160 Ko) de up-ton-noel-2025.webp (3508 px, 590 Ko)
    image: "/images/evenements/up-ton-noel-2025-web.webp",
    largeur: 990,
    hauteur: 1400,
  },
  {
    id: "halloween-party-2025",
    titre: "Halloween Party",
    date: "2025",
    debut: "2025-10-23T22:30:00+02:00",
    lieu: {
      nom: "Le Diplomate",
      rue: "11 Rue des Chapeliers",
      codePostal: "22300",
      ville: "Lannion",
    },
    prix: "Tarifs étudiants",
    description: "La soirée Halloween de l'Inter-Asso.",
    image: "/images/evenements/halloween-party.webp",
    largeur: 1080,
    hauteur: 1350,
  },
  {
    id: "up-ta-rentree-2025",
    titre: "Up ta Rentrée 2025",
    date: "2025",
    debut: "2025-09-25T20:00:00+02:00",
    fin: "2025-09-26T01:00:00+02:00",
    lieu: { nom: "Salle des Ursulines", codePostal: "22300", ville: "Lannion" },
    prix: "3 € en prévente, 5 € sur place",
    description: "La soirée de rentrée pour bien commencer l'année !",
    image: "/images/evenements/up-ta-rentree-2025.webp",
    largeur: 800,
    hauteur: 1131,
  },
  {
    id: "integration-mp-2025",
    titre: "Soirée d'intégration MP 2025",
    date: "2025",
    description: "La soirée d'intégration des étudiants de Mesures Physiques.",
    image: "/images/evenements/desintegration-mmi-2025.webp",
    largeur: 1920,
    hauteur: 250,
  },
  {
    id: "ski-2025",
    titre: "Ski 2025",
    date: "2025",
    description: "Le séjour ski annuel de l'Inter-Asso.",
    image: "/images/evenements/ski-2025.jpg",
    largeur: 275,
    hauteur: 183,
  },
];
