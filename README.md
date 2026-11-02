# Site web de l'INTER-ASSO Lannion — V2

Site officiel de l'Inter-Asso de l'IUT de Lannion. Ce projet est réservé aux étudiants de l'IUT de Lannion qui souhaitent contribuer.

Cette version (V2) est une réécriture complète du site d'origine (Astro) en **Next.js / React**, choisie pour faciliter les contributions étudiantes : React est plus enseigné en formation, la syntaxe JSX est plus proche du HTML classique, et l'écosystème est plus accessible pour les débutants.

## Stack technique

- **[Next.js 16](https://nextjs.org/)** (App Router, Turbopack, `output: "export"` — génération statique)
- **[React 19.3](https://react.dev/)** — Server Components par défaut, `'use client'` uniquement pour les composants interactifs
- **[Tailwind CSS v4.3](https://tailwindcss.com/)** — config CSS-first via `@import "tailwindcss"` dans `globals.css`
- **[Heroicons 2](https://heroicons.com/)** — icônes UI (`@heroicons/react/24/outline`)
- **[Formspree](https://formspree.io/)** — gestion des soumissions du formulaire de contact
- **[TypeScript 7](https://www.typescriptlang.org/)** — typage statique

## Prérequis

- **Node.js** v20.9 ou supérieur (v24 LTS recommandée) — [Télécharger](https://nodejs.org/)
- **Git** — [Télécharger](https://git-scm.com/)

## Installation

```bash
# Clone le repo
git clone https://github.com/inter-asso-lannion/inter-asso-site-web.git
cd inter-asso-site-web/V2

# Installe les dépendances
npm install

# Copie le fichier d'environnement (voir section Formulaire de contact)
cp .env.local.example .env.local
```

## Commandes disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement sur `http://localhost:3000` |
| `npm run build` | Build de production (génère le dossier `out/`) |
| `npm run start` | Prévisualise le build de production |

## Structure du projet

```
├── public/images/
│   ├── clubs/                # Logos des clubs + logo Inter-Asso
│   ├── partenaires/          # Logos des partenaires
│   ├── evenements/           # Affiches et photos des événements
│   └── og-inter-asso.png     # Image de partage réseaux sociaux (1200×630)
├── src/
│   ├── app/                  # Pages (routage basé sur les dossiers)
│   │   ├── layout.tsx        # Layout global, police, métadonnées SEO, JSON-LD de l'association
│   │   ├── globals.css       # Couleurs, typographie et animation des affiches
│   │   ├── page.tsx          # Page d'accueil /
│   │   ├── clubs/page.tsx    # Page /clubs
│   │   ├── partenaires/page.tsx
│   │   ├── evenements/page.tsx  # Mur d'affiches + JSON-LD Event
│   │   ├── contact/
│   │   │   ├── page.tsx      # Page /contact (coordonnées + FAQ)
│   │   │   └── ContactForm.tsx  # Formulaire (client component)
│   │   ├── mentions-legales/page.tsx
│   │   ├── not-found.tsx     # Page 404
│   │   ├── sitemap.ts        # /sitemap.xml (généré automatiquement)
│   │   └── robots.ts         # /robots.txt (généré automatiquement)
│   ├── components/           # Composants réutilisables
│   │   ├── Header.tsx        # Navigation (client component — menu mobile)
│   │   ├── Footer.tsx        # Appel à nous écrire + pied de page
│   │   ├── Hero.tsx          # Haut de l'accueil (affiches en éventail)
│   │   ├── ClubsSection.tsx, PartenairesSection.tsx, EvenementsSection.tsx  # Sections de l'accueil
│   │   ├── PageHeader.tsx    # En-tête des pages internes + fil d'Ariane
│   │   ├── ClubBadge.tsx     # Logo rond d'un club, cerclé de sa couleur
│   │   ├── JsonLd.tsx        # Données structurées schema.org
│   │   ├── BackButton.tsx    # Bouton « Page précédente » (page 404)
│   │   └── icons.tsx         # Icônes SVG Facebook, Instagram, GitHub
│   ├── data/                 # Données du site — c'est ici que tu travailleras le plus
│   │   ├── clubs.ts
│   │   ├── partenaires.ts
│   │   ├── evenements.ts
│   │   └── navigation.ts     # Liens de navigation (Header + Footer)
│   └── lib/
│       ├── site.ts           # Infos centrales (URL, email, adresse, réseaux) + métadonnées des pages
│       └── dates.ts          # Formatage des dates d'événements
├── .env.local.example
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## Modifier le contenu du site

Toutes les données affichées sur le site sont centralisées dans `src/data/`. Tu n'as pas besoin de toucher aux pages pour mettre à jour le contenu.

### Ajouter ou modifier un événement

Édite `src/data/evenements.ts`. Les événements sont listés du plus récent au plus ancien :

```ts
export const evenements: Evenement[] = [
  {
    id: "up-ta-rentree-2026",                  // identifiant unique
    titre: "Up ta Rentrée 2026",
    date: "2026",                              // affiché si `debut` est absent
    debut: "2026-09-24T20:00:00+02:00",        // optionnel — date ISO lue sur l'affiche
    fin: "2026-09-25T01:00:00+02:00",          // optionnel
    lieu: { nom: "Salle des Ursulines", codePostal: "22300", ville: "Lannion" }, // optionnel
    prix: "3 € en prévente, 5 € sur place",     // optionnel
    description: "Une courte description.",
    image: "/images/evenements/up-ta-rentree-2026.webp",
    largeur: 800,                              // dimensions réelles de l'image en pixels
    hauteur: 1131,
  },
  // ...
];
```

Ajoute l'image dans `public/images/evenements/`. Pour connaître ses dimensions sur Mac : `sips -g pixelWidth -g pixelHeight ton-image.webp`. Allège les grosses affiches (plus de 1 500 px de large) avant de les ajouter.

Quand `debut` et `lieu` sont renseignés, l'événement est aussi décrit pour Google (données structurées `Event`).

### Ajouter ou modifier un club

Édite `src/data/clubs.ts` :

```ts
export const clubs: Club[] = [
  {
    id: "bde-mmi",                      // identifiant unique, sert d'ancre : /clubs#bde-mmi
    nom: "BDE MMI",
    sigle: "MMI",                       // affiché dans la pastille si le club n'a pas de logo
    departement: "Métiers du Multimédia et de l'Internet",
    description: "Description du club...",
    couleur: "#a3238a",                 // couleur de la pastille du club
    texteSurCouleur: "#ffffff",         // "#ffffff" sur couleur foncée, "#000000" sur couleur claire
    logo: "/images/clubs/Logo-BDE-MMI.webp", // optionnel
    logoFit: "contain",                 // optionnel — pour les logos rectangulaires
    reseaux: {
      instagram: "https://instagram.com/...",
      email: "bde-mmi@exemple.fr",
    },
  },
  // ...
];
```

### Ajouter ou modifier un partenaire

Édite `src/data/partenaires.ts` :

```ts
export const partenaires: Partenaire[] = [
  {
    id: 8,
    nom: "Nom du partenaire",
    categorie: "Restauration",
    reduction: "-10% sur présentation",        // affiché en gros, surligné en jaune
    typeReduction: "carte",                    // "carte" (carte étudiante) ou "info"
    description: "Description...",
    logo: "/images/partenaires/Logo-Partenaire.webp",
    adresse: "1 Rue Exemple, 22300 Lannion",
    horaires: "Lun–Sam 12h–14h",               // optionnel
    notes: "Hors menus du jour",                // optionnel — affiché en rouge
    instagram: "@compte_instagram",             // optionnel
    lien: "https://site-du-partenaire.fr",      // optionnel
    accueil: true,                              // optionnel — affiché sur la page d'accueil
  },
  // ...
];
```

⚠️ Les noms de fichiers sont sensibles aux majuscules sur le serveur : `Logo-Le-Truc.webp` et `logo-le-truc.webp` sont deux fichiers différents. Recopie le nom exact du fichier.

## Formulaire de contact

Le formulaire utilise [Formspree](https://formspree.io/) pour envoyer les messages sans backend. L'ID du formulaire est configuré via une variable d'environnement :

```bash
# .env.local
NEXT_PUBLIC_FORMSPREE_ID=xpwvgpwe
```

Pour utiliser ton propre formulaire Formspree (par exemple lors d'un fork), crée un compte sur formspree.io, crée un nouveau formulaire, et remplace l'ID dans `.env.local`.

## Créer une nouvelle page

Crée un dossier dans `src/app/` avec un fichier `page.tsx` :

```tsx
// src/app/ma-page/page.tsx
import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Ma page",
  description: "Description pour le SEO.",
  path: "/ma-page",
});

export default function MaPage() {
  return (
    <>
      <PageHeader title="Ma page" path="/ma-page" lead="Chapô optionnel" />

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        {/* contenu */}
      </div>
    </>
  );
}
```

La page sera automatiquement accessible sur `/ma-page`. Ajoute le lien dans `src/data/navigation.ts` pour qu'il apparaisse dans le menu, et dans `src/app/sitemap.ts` pour Google.

### Server Components vs Client Components

Par défaut, tous les composants Next.js sont des **Server Components** : ils sont rendus côté serveur et n'ont pas accès aux APIs du navigateur (`useState`, `useEffect`, événements, etc.).

Ajoute `'use client'` en tête de fichier uniquement si ton composant a besoin d'interactivité :

```tsx
'use client';

import { useState } from "react";

export default function MonComposantInteractif() {
  const [count, setCount] = useState(0);
  // ...
}
```

Les seuls composants `'use client'` du projet sont `Header.tsx` (menu mobile), `ContactForm.tsx` (formulaire) et `BackButton.tsx`.

## SEO

Le SEO est géré via le [Metadata API de Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/metadata).

- Les infos centrales (URL, email, adresse, réseaux) sont dans `src/lib/site.ts`
- Chaque page appelle `pageMetadata()` : titre, description, URL canonique et Open Graph
- Image de partage : `public/images/og-inter-asso.png` (1200×630)
- Données structurées JSON-LD : association et clubs (`layout.tsx`), fil d'Ariane (`PageHeader.tsx`), événements datés (`evenements/page.tsx`)
- Le sitemap est généré depuis `src/app/sitemap.ts`, le `robots.txt` depuis `src/app/robots.ts`

## Charte graphique

Les couleurs viennent du logo de l'Inter-Asso (le macareux noir et blanc et ses pastilles de couleur) et du granit rose de la côte de Lannion. Elles sont définies dans `src/app/globals.css` et utilisables comme classes Tailwind (`bg-granit`, `text-magenta`…).

| Rôle | Classe Tailwind | Hex |
|---|---|---|
| Encre (texte, boutons) | `ink` | `#000000` |
| Fond | `paper` | `#ffffff` |
| Fond secondaire | `granit` | `#f1ddd6` |
| Texte secondaire | `muted` | `#514946` |
| Pastilles des clubs | `magenta`, `orange`, `bleu`, `lime`, `jaune`, `nuit` | `#a3238a`, `#ff9f00`, `#0ba6ea`, `#cedd48`, `#ffe500`, `#22133f` |

Typographie : **Archivo** (Google Fonts), une seule famille. Les titres utilisent la classe `display` (Archivo étroit, gras, en capitales, comme le lettrage du logo). La classe `narrow` donne la version étroite sans capitales.

Chaque club a sa pastille de couleur : on la retrouve dans les listes, autour de son logo et dans le pied de page.

## Contribuer

Seuls les étudiants de l'IUT de Lannion peuvent contribuer à ce projet.

### Workflow

```bash
# 1. Fork le repo sur GitHub, puis clone ton fork
git clone https://github.com/TON_PSEUDO/inter-asso-site-web.git
cd inter-asso-site-web/V2

# 2. Crée une branche pour ta modification
git checkout -b feat/ajout-evenement-ski-2026

# 3. Lance le serveur de dev et fais tes modifications
npm run dev

# 4. Vérifie que le build passe sans erreur avant de committer
npm run build

# 5. Commit et push
git add src/data/evenements.ts
git commit -m "feat: ajoute l'événement ski 2026"
git push origin feat/ajout-evenement-ski-2026

# 6. Ouvre une Pull Request sur GitHub
```

### Conventions de commit

| Préfixe | Usage |
|---|---|
| `feat:` | Nouvelle fonctionnalité ou nouveau contenu |
| `fix:` | Correction de bug |
| `style:` | Changements visuels / design |
| `refactor:` | Refactorisation sans changement fonctionnel |
| `docs:` | Documentation uniquement |

## Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS v4](https://tailwindcss.com/docs)
- [Heroicons](https://heroicons.com/)
- [Formspree](https://formspree.io/docs/)

## Contact

- Email : hello@inter-asso.fr
- Discord : [discord.gg/BG62QR77pP](https://discord.gg/BG62QR77pP)
- Instagram : [@inter_asso](https://instagram.com/inter_asso)

---

Fait avec ❤️ par les étudiants de l'IUT de Lannion
