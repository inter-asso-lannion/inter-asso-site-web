import { Palette, Atom, Code, Wifi, Music, Gamepad2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ClubDetail = {
  id: string;
  nom: string;
  departement: string;
  description: string;
  icon: LucideIcon;
  couleur: string;
  reseaux: {
    instagram?: string;
    email?: string;
  };
};

export type ClubAccueil = {
  nom: string;
  description: string;
  icon: LucideIcon;
  couleur: string;
};

export const clubs: ClubDetail[] = [
  {
    id: "bde-mmi",
    nom: "BDE MMI",
    departement: "Métiers du Multimédia et de l'Internet",
    description:
      "Le BDE MMI organise des événements pour les étudiants en MMI : soirées, sorties, projets créatifs et bien plus encore. Rejoins-nous pour vivre une expérience étudiante inoubliable !",
    icon: Palette,
    couleur: "from-purple-500 to-pink-500",
    reseaux: {
      instagram: "https://instagram.com/bde.mmi.lannion",
      email: "bdemmi@inter-asso.fr",
    },
  },
  {
    id: "bde-mp",
    nom: "BDE MP",
    departement: "Mesures Physiques",
    description:
      "Le BDE MP représente les étudiants du département Mesures Physiques. Expériences scientifiques, soirées et cohésion d'équipe sont au programme !",
    icon: Atom,
    couleur: "from-blue-500 to-cyan-500",
    reseaux: {
      instagram: "https://instagram.com/bde.mpintes",
      email: "bdemp@inter-asso.fr",
    },
  },
  {
    id: "bde-info",
    nom: "BDE INFO",
    departement: "Informatique",
    description:
      "Le BDE INFO rassemble les passionnés de code et de nouvelles technologies. Hackathons, LAN parties et événements tech pour tous les étudiants en informatique !",
    icon: Code,
    couleur: "from-green-500 to-emerald-500",
    reseaux: {
      instagram: "https://instagram.com/alive_iut",
      email: "bdeinfo@inter-asso.fr",
    },
  },
  {
    id: "bde-rt",
    nom: "BDE R&T",
    departement: "Réseaux & Télécommunications",
    description:
      "Le BDE R&T connecte les étudiants du département Réseaux et Télécommunications. Événements networking, ateliers techniques et moments conviviaux !",
    icon: Wifi,
    couleur: "from-orange-500 to-yellow-500",
    reseaux: {
      instagram: "https://instagram.com/bde_rt_lannion",
      email: "bdert@inter-asso.fr",
    },
  },
  {
    id: "bpm",
    nom: "BPM",
    departement: "Club Musique",
    description:
      "Le BPM (Beats Per Minute) est le club musique de l'IUT ! Concerts, jam sessions, découverte d'artistes et soirées musicales. Que tu sois musicien ou simple mélomane, viens partager ta passion !",
    icon: Music,
    couleur: "from-red-500 to-pink-500",
    reseaux: {
      instagram: "https://instagram.com/bpm_asso",
      email: "bpm@inter-asso.fr",
    },
  },
  {
    id: "localdreamer",
    nom: "LocalDreamer",
    departement: "Club développement jeux vidéo",
    description:
      "LocalDreamer est le club de développement de jeux vidéo de l'IUT ! Rejoins la communauté gaming de Lannion !",
    icon: Gamepad2,
    couleur: "from-teal-500 to-emerald-500",
    reseaux: {
      instagram: "https://instagram.com/localdreamer.lan",
      email: "localdreamer@inter-asso.fr",
    },
  },
];

export const clubsAccueil: ClubAccueil[] = [
  {
    nom: "BDE MMI",
    description: "Bureau Des Étudiants Multimédia et Internet",
    icon: Palette,
    couleur: "from-purple-400 to-pink-500",
  },
  {
    nom: "BDE MP",
    description: "Bureau Des Étudiants Mesures Physiques",
    icon: Atom,
    couleur: "from-blue-400 to-cyan-500",
  },
  {
    nom: "BDE R&T",
    description: "Bureau Des Étudiants Réseaux & Télécommunications",
    icon: Wifi,
    couleur: "from-orange-400 to-yellow-500",
  },
  {
    nom: "BDE INFO",
    description: "Bureau Des Étudiants Informatique",
    icon: Code,
    couleur: "from-green-400 to-emerald-500",
  },
  {
    nom: "BPM",
    description: "Club musique",
    icon: Music,
    couleur: "from-red-400 to-pink-500",
  },
];
