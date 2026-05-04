import type { Metadata } from "next";
import { CreditCard, MapPin, Clock, AlertCircle } from "lucide-react";
import { partenaires } from "@/data/partenaires";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nos Partenaires",
  description:
    "Profitez d'avantages exclusifs chez nos partenaires locaux à Lannion : réductions, menus étudiants et offres spéciales sur présentation de votre carte Inter-Asso.",
};

export default function PartenairesPage() {
  return (
    <main>
      <PageHero title="Nos Partenaires" paddingY="py-16">
        <div className="mt-6 inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 shadow-lg">
          <CreditCard className="h-6 w-6" />
          <span className="font-semibold">
            Carte étudiante obligatoire pour bénéficier des avantages
          </span>
        </div>
      </PageHero>

      <section className="container mx-auto px-4 mt-16 mb-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {partenaires.map((partenaire) => (
            <article
              key={partenaire.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row min-h-80 hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="lg:w-1/3 bg-gray-50 flex items-center justify-center p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
                <img
                  src={partenaire.logo}
                  alt={`Logo ${partenaire.nom}`}
                  className="w-full max-h-48 object-contain drop-shadow-sm"
                />
              </div>

              <div className="lg:w-2/3 p-8 md:p-12 flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
                    {partenaire.categorie}
                  </span>
                  <span className="px-4 py-1.5 bg-green-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm animate-pulse">
                    {partenaire.reduction}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {partenaire.nom}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {partenaire.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto pt-6 border-t border-gray-100 text-gray-700">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                      <span className="font-medium text-sm">
                        {partenaire.adresse}
                      </span>
                    </div>
                    {partenaire.horaires && (
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{partenaire.horaires}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    {partenaire.notes && (
                      <div className="flex items-start gap-3 text-red-600 font-bold bg-red-50 p-3 rounded-xl border border-red-100">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                        <span className="text-xs uppercase tracking-wide">
                          {partenaire.notes}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-4 pt-2">
                      {partenaire.instagram && (
                        <span className="text-sm font-bold text-pink-600 flex items-center gap-1">
                          📸{" "}
                          <span className="hover:underline cursor-default">
                            {partenaire.instagram}
                          </span>
                        </span>
                      )}
                      {partenaire.lien && (
                        <a
                          href={partenaire.lien}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                        >
                          🌐 <span>Site web</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
