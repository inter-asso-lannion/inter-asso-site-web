import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Building2, Server, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site inter-asso.fr — éditeur, hébergement, propriété intellectuelle et protection des données personnelles (RGPD).",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <main className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Mentions Légales
            </h1>
            <p className="text-lg text-gray-600">
              Informations légales concernant le site inter-asso.fr
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Éditeur du site
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Dénomination
                  </p>
                  <p>INTER ASSO</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Forme juridique
                  </p>
                  <p>Association déclarée (loi 1901)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    RNA (Répertoire National des Associations)
                  </p>
                  <p>W223000547</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">SIREN</p>
                  <p>513 748 145</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Siège social
                  </p>
                  <p>
                    IUT de Lannion
                    <br />
                    Rue Édouard Branly
                    <br />
                    22300 Lannion, France
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Contact</p>
                  <p>
                    Email :{" "}
                    <a
                      href="mailto:hello@inter-asso.fr"
                      className="text-purple-600 hover:underline"
                    >
                      hello@inter-asso.fr
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Directeur de la publication
                  </p>
                  <p>Le Président de l&apos;association en exercice</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Hébergement
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Hébergeur</p>
                  <p>Infomaniak Network SA</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Adresse</p>
                  <p>
                    Rue Eugène Marziano 25
                    <br />
                    1227 Les Acacias (GE)
                    <br />
                    Genève, Suisse
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Registre du commerce
                  </p>
                  <p>CH-660.0.059.996-1 (Canton de Genève)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Numéro IDE/TVA
                  </p>
                  <p>CHE-103.167.648</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Propriété intellectuelle
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  Le contenu du site inter-asso.fr (textes, images, graphismes,
                  logo, icônes, etc.) est la propriété exclusive de
                  l&apos;Inter-Asso IUT de Lannion, à l&apos;exception des
                  marques, logos ou contenus appartenant à d&apos;autres
                  sociétés partenaires ou auteurs.
                </p>
                <p>
                  Le code source du site est disponible sous licence MIT sur{" "}
                  <a
                    href="https://github.com/inter-asso-lannion/inter-asso-site-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                  >
                    GitHub
                  </a>
                  .
                </p>
                <p>
                  Toute reproduction, distribution, modification, adaptation,
                  retransmission ou publication de ces différents éléments est
                  strictement interdite sans l&apos;accord exprès par écrit de
                  l&apos;Inter-Asso.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Protection des données personnelles
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Collecte de données
                </h3>
                <p>
                  Les informations recueillies via le formulaire de contact sont
                  destinées uniquement à l&apos;Inter-Asso IUT de Lannion pour
                  le traitement de votre demande.
                </p>

                <h3 className="font-semibold text-gray-900 text-lg mt-6">
                  Vos droits
                </h3>
                <p>
                  Conformément au RGPD et à la loi Informatique et Libertés,
                  vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Droit d&apos;accès à vos données personnelles</li>
                  <li>Droit de rectification de vos données</li>
                  <li>Droit à l&apos;effacement de vos données</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit d&apos;opposition au traitement</li>
                  <li>Droit à la portabilité de vos données</li>
                </ul>

                <p className="mt-4">
                  Pour exercer ces droits :{" "}
                  <a
                    href="mailto:hello@inter-asso.fr"
                    className="text-purple-600 hover:underline"
                  >
                    hello@inter-asso.fr
                  </a>
                </p>

                <h3 className="font-semibold text-gray-900 text-lg mt-6">
                  Cookies
                </h3>
                <p>
                  Ce site n&apos;utilise aucun cookie de suivi ou de profilage.
                  Aucune donnée de navigation n&apos;est collectée ou
                  enregistrée.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Limitation de responsabilité
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  L&apos;Inter-Asso s&apos;efforce d&apos;assurer au mieux de
                  ses possibilités l&apos;exactitude et la mise à jour des
                  informations diffusées sur ce site. Toutefois, elle ne peut
                  garantir l&apos;exactitude, la précision ou
                  l&apos;exhaustivité des informations mises à disposition.
                </p>
                <p>
                  Les liens hypertextes mis en place dans le cadre du site en
                  direction d&apos;autres sites ne sauraient engager la
                  responsabilité de l&apos;Inter-Asso.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Loi applicable
              </h2>
              <p className="text-gray-700">
                Les présentes mentions légales sont régies par la loi française.
                En cas de litige et à défaut d&apos;accord amiable, le litige
                sera porté devant les tribunaux français conformément aux règles
                de compétence en vigueur.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : 24 décembre 2025
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-all shadow-lg"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
