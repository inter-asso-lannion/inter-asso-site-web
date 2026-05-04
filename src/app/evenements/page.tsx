import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import { IconInstagram } from "@/components/icons";
import { evenements } from "@/data/evenements";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Événements",
  description:
    "Retrouve tous les événements organisés par l'Inter-Asso et les clubs de l'IUT de Lannion : soirées, sorties, séjours ski et plus encore.",
};

export default function EvenementsPage() {
  return (
    <main>
      <PageHero
        title="Événements"
        subtitle="Retrouve tous les événements organisés par l'Inter-Asso et les clubs de l'IUT de Lannion."
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {evenements.map((evenement) => (
                <article
                  key={evenement.titre}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={evenement.image}
                      alt={evenement.titre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-purple-600 text-sm font-semibold mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{evenement.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {evenement.titre}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {evenement.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 text-center bg-linear-to-r from-purple-600 to-pink-500 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Reste informé des prochains événements
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Suis notre Instagram pour ne rater aucun événement !
              </p>
              <a
                href="https://instagram.com/inter_asso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <IconInstagram className="h-5 w-5" />
                Suivre sur Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
