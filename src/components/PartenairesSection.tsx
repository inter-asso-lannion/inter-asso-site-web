import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { partenairesAccueil } from "@/data/partenaires";

export default function PartenairesSection() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Partenaires
          </h2>
          <p className="text-lg text-gray-600">
            Ils nous soutiennent et nous font confiance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto mb-12">
          {partenairesAccueil.map((partenaire) => (
            <div
              key={partenaire.nom}
              className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-xl transition-all group"
            >
              <img
                src={partenaire.logo}
                alt={`Logo ${partenaire.nom}`}
                className="max-w-full max-h-24 object-contain group-hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/partenaires"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
          >
            Voir tous nos partenaires
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
