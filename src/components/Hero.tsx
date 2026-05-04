import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-purple-600 via-pink-500 to-orange-400 text-white py-24 md:py-36">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10 flex justify-center">
            <img
              src="/images/clubs/Logo-Inter-Asso.webp"
              alt="Logo Inter-Asso IUT Lannion"
              className="h-28 w-28 md:h-36 md:w-36 drop-shadow-xl"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            L&apos;Inter-Asso de l&apos;IUT de Lannion
          </h1>

          <p className="text-xl md:text-2xl mb-6 text-white/90 font-medium">
            Le cœur de la vie étudiante
          </p>

          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto">
            Clubs, événements, partenariats et initiatives étudiantes :
            l&apos;Inter-Asso rassemble, dynamise et fait vivre la communauté de
            l&apos;IUT de Lannion.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/clubs"
              className="group inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold shadow-xl transition-all hover:scale-105 hover:bg-gray-100"
            >
              Découvrir les clubs
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/evenements"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/80 px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-purple-600"
            >
              Voir les événements
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 96L80 90C160 84 320 72 480 70C640 68 800 76 960 82C1120 88 1280 92 1360 94L1440 96V120H0V96Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
