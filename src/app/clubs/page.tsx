import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";
import { IconInstagram } from "@/components/icons";
import { clubs } from "@/data/clubs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nos Clubs",
  description:
    "Découvrez les 6 clubs de l'Inter-Asso IUT de Lannion : BDE MMI, BDE MP, BDE INFO, BDE R&T, BPM et LocalDreamer. Rejoignez le club qui vous correspond !",
};

export default function ClubsPage() {
  return (
    <main>
      <PageHero
        title="Nos Clubs"
        subtitle="Découvre les 6 clubs de l'Inter-Asso et rejoins celui qui te correspond !"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clubs.map((club) => {
                const Icon = club.icon;
                return (
                  <article
                    key={club.id}
                    id={club.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
                  >
                    <div
                      className={`relative h-48 bg-linear-to-br ${club.couleur} flex flex-col items-center justify-center p-6`}
                    >
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white text-center">
                        {club.nom}
                      </h2>
                    </div>

                    <div className="p-6">
                      <div
                        className={`inline-block px-3 py-1 bg-linear-to-r ${club.couleur} text-white text-xs font-semibold rounded-full mb-4`}
                      >
                        {club.departement}
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        {club.description}
                      </p>

                      <div className="space-y-2">
                        {club.reseaux.instagram && (
                          <a
                            href={club.reseaux.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-medium"
                            aria-label={`Instagram ${club.nom}`}
                          >
                            <IconInstagram className="h-4 w-4" />
                            <span>Instagram</span>
                          </a>
                        )}
                        {club.reseaux.email && (
                          <a
                            href={`mailto:${club.reseaux.email}`}
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
                            aria-label={`Email ${club.nom}`}
                          >
                            <Mail className="h-4 w-4" />
                            <span>Email</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-16 text-center bg-linear-to-r from-purple-600 to-pink-500 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Envie de rejoindre un club ?
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Contacte directement le club qui t&apos;intéresse via Instagram
                ou par email !
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Nous contacter
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
