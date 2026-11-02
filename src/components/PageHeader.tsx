import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/site";

type PageHeaderProps = {
  title: string;
  /** Chemin de la page, pour le fil d'Ariane (ex. "/clubs") */
  path: string;
  lead?: string;
  children?: React.ReactNode;
};

/** En-tête des pages internes : fil d'Ariane, titre et chapô, sur fond granit rose. */
export default function PageHeader({ title, path, lead, children }: PageHeaderProps) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: title, item: absoluteUrl(path) },
    ],
  };

  return (
    <header className="bg-granit">
      <JsonLd data={breadcrumb} />
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-14 md:px-6 md:pt-14 md:pb-20">
        <nav aria-label="Fil d'Ariane" className="text-sm text-muted">
          <ol className="flex gap-2">
            <li>
              <Link href="/" className="underline-offset-4 hover:underline">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-ink">
              {title}
            </li>
          </ol>
        </nav>
        <h1 className="display mt-6 text-6xl md:text-8xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg md:text-xl">{lead}</p>}
        {children}
      </div>
    </header>
  );
}
