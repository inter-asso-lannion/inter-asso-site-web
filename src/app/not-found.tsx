import Link from "next/link";
import { Home } from "lucide-react";
import BackButton from "@/components/BackButton";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-9xl font-bold text-purple-600 mb-6">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page introuvable
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Désolé, la page que tu cherches n&apos;existe pas ou a été déplacée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BackButton />
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
            >
              <Home className="h-5 w-5" />
              Accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
