import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-36">
      <p className="display text-[clamp(7rem,25vw,16rem)] text-granit-deep" aria-hidden="true">
        404
      </p>
      <h1 className="display mt-2 text-5xl md:text-7xl">Page introuvable</h1>
      <p className="mt-6 max-w-xl text-lg">
        Désolé, la page que tu cherches n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-ink px-7 py-3.5 text-center font-semibold text-paper hover:bg-magenta"
        >
          Retour à l&apos;accueil
        </Link>
        <BackButton />
      </div>
    </section>
  );
}
