export type Partenaire = {
  id: number;
  nom: string;
  categorie: string;
  adresse: string;
  description: string;
  reduction: string;
  typeReduction: "carte" | "info";
  logo: string;
  horaires?: string;
  notes?: string;
  lien?: string;
  instagram?: string;
};

export const partenaires: Partenaire[] = [
  {
    id: 1,
    nom: "Banque Populaire Grand Ouest",
    categorie: "Banque",
    adresse: "Lannion",
    description:
      "Partenaire officiel de l'Inter-Asso, la BPGO propose des offres bancaires spéciales étudiants et nous soutient dans nos projets. Offres à l'ouverture de compte et avantages exclusifs comme des places de ski offertes.",
    reduction: "Offres étudiants",
    typeReduction: "info",
    logo: "/images/partenaires/logo-bpgo.webp",
  },
  {
    id: 2,
    nom: "Le Truc",
    categorie: "Bar à jeux / Café",
    adresse: "Lannion",
    description:
      "Bar à jeux convivial ! Profite d'un large choix de cocktails et mocktails du moment à prix réduit, ainsi que sur le bec de bonde. Le billard est gratuit pour les étudiants.",
    reduction: "Tarifs réduits & Billard",
    typeReduction: "carte",
    horaires: "Mer-Sam : 17h-01h | Dim : 15h-22h",
    logo: "/images/partenaires/logo-le-truc.webp",
  },
  {
    id: 3,
    nom: "Rosa Louise",
    categorie: "Restaurant",
    adresse: "14 rue Gaspard Monge, 22300 Lannion",
    description:
      "Restaurant à 2 minutes de l'IUT. Menu étudiant à 10€ (Cheeseburger, Pâtes saumon ou Poke Bowl). Boissons Loburg à 2€ (25cl) ou 4€ (50cl). Partenaire de nos soirées d'intégration !",
    reduction: "Menu Étudiant 10€",
    typeReduction: "carte",
    horaires: "Ouvert 7j/7",
    logo: "/images/partenaires/logo-rosa-louise.webp",
    lien: "https://www.rosa-louise.fr",
    instagram: "@rosa_louise_lannion",
  },
  {
    id: 4,
    nom: "Marie Blachère",
    categorie: "Boulangerie",
    adresse: "Chemin de Traou An Dour, 22700 Saint-Quay-Perros",
    description:
      "Pour tes pauses déjeuner, profite de l'offre spéciale étudiante : pour l'achat d'une formule sandwich (sandwich + boisson), le dessert t'est offert !",
    reduction: "Dessert Offert",
    typeReduction: "carte",
    horaires: "Lun-Sam : 08h-20h",
    logo: "/images/partenaires/logo-marie-blachere.webp",
  },
  {
    id: 5,
    nom: "V and B",
    categorie: "Cave / Bar",
    adresse: "Lannion",
    description:
      "Le spécialiste des bières et vins à Lannion. V and B nous accompagne et nous conseille pour l'organisation et la fourniture de boissons lors de nos grands événements.",
    reduction: "Partenaire Logistique",
    typeReduction: "info",
    logo: "/images/partenaires/logo-vandb.webp",
  },
  {
    id: 6,
    nom: "Le Diplomate",
    categorie: "Bar",
    adresse: "11 Rue des Chapeliers, 22300 Lannion",
    description:
      "Bar qui soutient la scène locale en accueillant nos DJ étudiants. Profite de tarifs préférentiels sur les consommations au bar sur présentation de ta carte.",
    reduction: "Tarifs Étudiants",
    typeReduction: "carte",
    horaires: "Tous les jours dès 17h30 (18h le Dim/Lun) jusqu'à 01h",
    logo: "/images/partenaires/logo-le-diplomate.webp",
  },
  {
    id: 7,
    nom: "Mood Club",
    categorie: "Discothèque",
    adresse: "Saint-Quay-Perros",
    description:
      "Le rendez-vous nocturne lors des soirées d'ouverture exceptionnelles (certains jeudis, Halloween, Noël). Entrée à 10€ avec conso (au lieu de 15€) pour les étudiants.",
    reduction: "Entrée 10€ avec conso",
    typeReduction: "carte",
    horaires: "Ven-Sam : 23h-07h",
    notes: "Entrée strictement réservée aux personnes majeures (18+).",
    logo: "/images/partenaires/logo-mood-club.webp",
  },
];

export const partenairesAccueil = [
  { nom: "BPGO", logo: "/images/partenaires/logo-bpgo.webp" },
  { nom: "Rosa Louise", logo: "/images/partenaires/logo-rosa-louise.webp" },
  { nom: "Le Truc", logo: "/images/partenaires/logo-le-truc.webp" },
  { nom: "V and B", logo: "/images/partenaires/logo-vandb.webp" },
  { nom: "Le Diplomate", logo: "/images/partenaires/logo-le-diplomate.webp" },
];
