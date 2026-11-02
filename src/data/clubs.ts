export type Club = {
  /** Identifiant unique, utilisé comme ancre : /clubs#bde-mmi */
  id: string;
  nom: string;
  /** Nom court affiché dans les pastilles quand il n'y a pas de logo */
  sigle: string;
  departement: string;
  description: string;
  /** Couleur de la pastille du club (reprise des pastilles du logo Inter-Asso) */
  couleur: string;
  /** Couleur du texte posé sur la couleur du club, pour garder un bon contraste */
  texteSurCouleur: "#000000" | "#ffffff";
  /** Logo dans public/images/clubs/ — optionnel */
  logo?: string;
  /** "cover" remplit le rond, "contain" garde le logo entier (logos rectangulaires) */
  logoFit?: "cover" | "contain";
  reseaux: {
    instagram?: string;
    email?: string;
  };
};

export const clubs: Club[] = [
  {
    id: "bde-mmi",
    nom: "BDE MMI",
    sigle: "MMI",
    departement: "Métiers du Multimédia et de l'Internet",
    description:
      "Le BDE MMI organise des événements pour les étudiants en MMI : soirées, sorties, projets créatifs et bien plus encore. Rejoins-nous pour vivre une expérience étudiante inoubliable !",
    couleur: "#a3238a",
    texteSurCouleur: "#ffffff",
    reseaux: {
      instagram: "https://instagram.com/bde.mmi.lannion",
      email: "bdemmi@inter-asso.fr",
    },
  },
  {
    id: "bde-mp",
    nom: "BDE MP",
    sigle: "MP",
    departement: "Mesures Physiques",
    description:
      "Le BDE MP représente les étudiants du département Mesures Physiques. Expériences scientifiques, soirées et cohésion d'équipe sont au programme !",
    couleur: "#ff9f00",
    texteSurCouleur: "#000000",
    logo: "/images/clubs/Logo-BDE-Mpintes.webp",
    reseaux: {
      instagram: "https://instagram.com/bde.mpintes",
      email: "bdemp@inter-asso.fr",
    },
  },
  {
    id: "bde-info",
    nom: "BDE INFO",
    sigle: "INFO",
    departement: "Informatique",
    description:
      "Le BDE INFO rassemble les passionnés de code et de nouvelles technologies. Hackathons, LAN parties et événements tech pour tous les étudiants en informatique !",
    couleur: "#0ba6ea",
    texteSurCouleur: "#000000",
    logo: "/images/clubs/Logo_Alive.webp",
    reseaux: {
      instagram: "https://instagram.com/alive_iut",
      email: "bdeinfo@inter-asso.fr",
    },
  },
  {
    id: "bde-rt",
    nom: "BDE R&T",
    sigle: "R&T",
    departement: "Réseaux & Télécommunications",
    description:
      "Le BDE R&T connecte les étudiants du département Réseaux et Télécommunications. Événements networking, ateliers techniques et moments conviviaux !",
    couleur: "#cedd48",
    texteSurCouleur: "#000000",
    logo: "/images/clubs/Logo-BDE-Angel.webp",
    reseaux: {
      instagram: "https://instagram.com/bde_rt_lannion",
      email: "bdert@inter-asso.fr",
    },
  },
  {
    id: "bpm",
    nom: "BPM",
    sigle: "BPM",
    departement: "Club Musique",
    description:
      "Le BPM (Beats Per Minute) est le club musique de l'IUT ! Concerts, jam sessions, découverte d'artistes et soirées musicales. Que tu sois musicien ou simple mélomane, viens partager ta passion !",
    couleur: "#ffe500",
    texteSurCouleur: "#000000",
    logo: "/images/clubs/Logo-BPM.webp",
    reseaux: {
      instagram: "https://instagram.com/bpm_asso",
      email: "bpm@inter-asso.fr",
    },
  },
  {
    id: "localdreamer",
    nom: "LocalDreamer",
    sigle: "LD",
    departement: "Club développement jeux vidéo",
    description:
      "LocalDreamer est le club de développement de jeux vidéo de l'IUT ! Rejoins la communauté gaming de Lannion !",
    couleur: "#22133f",
    texteSurCouleur: "#ffffff",
    logo: "/images/clubs/Logo-Local-Dreamer.webp",
    logoFit: "contain",
    reseaux: {
      instagram: "https://instagram.com/localdreamer.lan",
      email: "localdreamer@inter-asso.fr",
    },
  },
];
