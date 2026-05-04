import Link from "next/link";
import { clubsAccueil } from "@/data/clubs";

export default function ClubsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Clubs
          </h2>
          <p className="text-lg text-gray-600">
            Rejoins un de nos 5 clubs et participe à la vie étudiante de
            l&apos;IUT !
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
          {clubsAccueil.map((club) => {
            const Icon = club.icon;
            return (
              <div
                key={club.nom}
                className="group bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-xl transition-all h-full"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-linear-to-br ${club.couleur} rounded-full mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {club.nom}
                </h3>
                <p className="text-gray-600 text-sm">{club.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/clubs"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg"
          >
            Découvrir tous nos clubs
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" x2="19" y1="12" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
