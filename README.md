# Site web de l'INTER-ASSO Lannion — V2

Site officiel de l'Inter-Asso de l'IUT de Lannion. Ce projet est réservé aux étudiants de l'IUT de Lannion qui souhaitent contribuer.

Cette version (V2) est une réécriture complète du site d'origine (Astro) en **Next.js / React**, choisie pour faciliter les contributions étudiantes : React est plus enseigné en formation, la syntaxe JSX est plus proche du HTML classique, et l'écosystème est plus accessible pour les débutants.

## Stack technique

- **[Next.js 15](https://nextjs.org/)** (App Router, `output: "export"` — génération statique)
- **[React 19](https://react.dev/)** — Server Components par défaut, `'use client'` uniquement pour les composants interactifs
- **[Tailwind CSS v4](https://tailwindcss.com/)** — config CSS-first via `@import "tailwindcss"` dans `globals.css`
- **[Lucide React](https://lucide.dev/)** — icônes UI
- **[Formspree](https://formspree.io/)** — gestion des soumissions du formulaire de contact
- **TypeScript** — typage statique

## Prérequis

- **Node.js** v18 ou supérieur — [Télécharger](https://nodejs.org/)
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
V2/
├── public/                   # Assets statiques (symlink vers ../public)
│   └── images/
│       ├── clubs/            # Logos des clubs
│       ├── partenaires/      # Logos des partenaires
│       └── evenements/       # Photos des événements
├── src/
│   ├── app/                  # Pages (routage basé sur les dossiers)
│   │   ├── layout.tsx        # Layout global + métadonnées SEO
│   │   ├── page.tsx          # Page d'accueil /
│   │   ├── clubs/page.tsx    # Page /clubs
│   │   ├── partenaires/page.tsx
│   │   ├── evenements/page.tsx
│   │   ├── contact/
│   │   │   ├── page.tsx      # Page /contact
│   │   │   └── ContactForm.tsx  # Formulaire (client component)
│   │   ├── mentions-legales/page.tsx
│   │   ├── sitemap.ts        # /sitemap.xml (généré automatiquement)
│   │   └── robots.ts         # /robots.txt (généré automatiquement)
│   ├── components/           # Composants réutilisables
│   │   ├── Header.tsx        # Navigation (client component — menu mobile)
│   │   ├── Footer.tsx
│   │   ├── PageHero.tsx      # Bandeau hero commun à toutes les pages
│   │   ├── BackButton.tsx    # Bouton retour arrière
│   │   └── icons.tsx         # Icônes SVG pour Facebook, Instagram, GitHub
│   └── data/                 # Données du site — c'est ici que tu travailleras le plus
│       ├── clubs.ts          # Liste des clubs
│       ├── partenaires.ts    # Liste des partenaires
│       ├── evenements.ts     # Liste des événements
│       └── navigation.ts     # Liens de navigation (Header + Footer)
├── .env.local.example        # Variables d'environnement à copier
├── next.config.ts            # Configuration Next.js
├── postcss.config.mjs        # PostCSS (requis pour Tailwind v4)
└── tsconfig.json
```

## Modifier le contenu du site

Toutes les données affichées sur le site sont centralisées dans `src/data/`. Tu n'as pas besoin de toucher aux pages pour mettre à jour le contenu.

### Ajouter ou modifier un événement

Édite `src/data/evenements.ts` :

```ts
export const evenements: Evenement[] = [
  {
    titre: "Nom de l'événement",
    date: "Avril 2026",
    image: "/images/evenements/nom-du-fichier.webp",
    description: "Une courte description.",
  },
  // ...
];
```

Ajoute l'image dans `public/images/evenements/`. Les formats `.webp` et `.jpg` sont acceptés.

### Ajouter ou modifier un club

Édite `src/data/clubs.ts` :

```ts
import { Music } from "lucide-react"; // importe l'icône souhaitée depuis lucide-react

export const clubs: Club[] = [
  {
    id: "bde-mmi",                                  // identifiant unique (slug)
    nom: "BDE MMI",
    departement: "Multimédia et Internet",
    description: "Description du club...",
    couleur: "from-purple-500 to-pink-500",         // dégradé Tailwind (bg-linear-to-br)
    icon: Music,                                    // composant icône Lucide
    reseaux: {
      instagram: "https://instagram.com/...",
      email: "bde-mmi@exemple.fr",                 // optionnel
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
    id: "nom-du-partenaire",
    nom: "Nom du partenaire",
    categorie: "Restauration",
    reduction: "-10% sur présentation",
    description: "Description...",
    logo: "/images/partenaires/logo.png",
    adresse: "1 Rue Exemple, 22300 Lannion",
    horaires: "Lun–Sam 12h–14h",               // optionnel
    notes: "Hors menus du jour",                // optionnel — affiché en rouge
    instagram: "@compte_instagram",             // optionnel
    lien: "https://site-du-partenaire.fr",      // optionnel
  },
  // ...
];
```

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
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ma page",
  description: "Description pour le SEO.",
};

export default function MaPage() {
  return (
    <main>
      <PageHero title="Ma page" subtitle="Sous-titre optionnel" />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* contenu */}
        </div>
      </section>
    </main>
  );
}
```

La page sera automatiquement accessible sur `/ma-page`. Ajoute le lien dans `src/data/navigation.ts` pour qu'il apparaisse dans le menu.

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

Les seuls composants `'use client'` du projet sont `Header.tsx` (menu mobile) et `ContactForm.tsx` (formulaire).

## SEO

Le SEO est géré via le [Metadata API de Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/metadata).

- Les métadonnées globales (Open Graph, Twitter Card, JSON-LD) sont dans `src/app/layout.tsx`
- Chaque page définit son propre `title` et `description` via `export const metadata`
- Le sitemap est généré automatiquement depuis `src/app/sitemap.ts`
- Le `robots.txt` est généré depuis `src/app/robots.ts`

Pour ajouter une page au sitemap, ajoute une entrée dans `src/app/sitemap.ts`.

## Charte graphique

Le site utilise un dégradé violet → rose → orange comme couleur principale.

| Rôle | Valeur Tailwind | Hex |
|---|---|---|
| Violet | `purple-600` | `#7c3aed` |
| Rose | `pink-500` | `#ec4899` |
| Orange | `orange-400` | `#fb923c` |

Le héro de chaque page utilise le composant `PageHero` avec le dégradé `from-purple-600 via-pink-500 to-orange-400`.

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
- [Lucide Icons](https://lucide.dev/icons/)
- [Formspree](https://formspree.io/docs/)

## Contact

- Email : hello@inter-asso.fr
- Discord : [discord.gg/BG62QR77pP](https://discord.gg/BG62QR77pP)
- Instagram : [@inter_asso](https://instagram.com/inter_asso)

---

Fait avec ❤️ par les étudiants de l'IUT de Lannion
