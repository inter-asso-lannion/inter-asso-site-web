import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Mentions Légales",
  alternates: { canonical: "/mentions-legales" },
  description:
    "Mentions légales du site inter-asso.fr — éditeur, hébergement, propriété intellectuelle et protection des données personnelles (RGPD).",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        title="Mentions Légales"
        path="/mentions-legales"
        lead="Informations légales concernant le site inter-asso.fr"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="max-w-3xl">

          <div className="space-y-14">
            <section className="border-t-2 border-ink pt-8">
              <h2 className="display mb-6 text-4xl">Éditeur du site</h2>

              <div className="space-y-4">
                <div>
                  <p className="text-muted">
                    Dénomination
                  </p>
                  <p>INTER ASSO</p>
                </div>
                <div>
                  <p className="text-muted">
                    Forme juridique
                  </p>
                  <p>Association déclarée (loi 1901)</p>
                </div>
                <div>
                  <p className="text-muted">
                    RNA (Répertoire National des Associations)
                  </p>
                  <p>W223000547</p>
                </div>
                <div>
                  <p className="text-muted">SIREN</p>
                  <p>513 748 145</p>
                </div>
                <div>
                  <p className="text-muted">
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
                  <p className="text-muted">Contact</p>
                  <p>
                    Email :{" "}
                    <a
                      href="mailto:hello@inter-asso.fr"
                      className="font-semibold underline decoration-2 underline-offset-4"
                    >
                      hello@inter-asso.fr
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-muted">
                    Directeur de la publication
                  </p>
                  <p>Le Président de l&apos;association en exercice</p>
                </div>
              </div>
            </section>

            <section className="border-t-2 border-ink pt-8">
              <h2 className="display mb-6 text-4xl">Hébergement</h2>

              <div className="space-y-4">
                <div>
                  <p className="text-muted">Hébergeur</p>
                  <p>Infomaniak Network SA</p>
                </div>
                <div>
                  <p className="text-muted">Adresse</p>
                  <p>
                    Rue Eugène Marziano 25
                    <br />
                    1227 Les Acacias (GE)
                    <br />
                    Genève, Suisse
                  </p>
                </div>
                <div>
                  <p className="text-muted">
                    Registre du commerce
                  </p>
                  <p>CH-660.0.059.996-1 (Canton de Genève)</p>
                </div>
                <div>
                  <p className="text-muted">
                    Numéro IDE/TVA
                  </p>
                  <p>CHE-103.167.648</p>
                </div>
              </div>
            </section>

            <section className="border-t-2 border-ink pt-8">
              <h2 className="display mb-6 text-4xl">Propriété intellectuelle</h2>

              <div className="space-y-4">
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
                    className="font-semibold underline decoration-2 underline-offset-4"
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

            <section className="border-t-2 border-ink pt-8">
              <h2 className="display mb-6 text-4xl">Protection des données personnelles</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Collecte de données
                </h3>
                <p>
                  Les informations recueillies via le formulaire de contact sont
                  destinées uniquement à l&apos;Inter-Asso IUT de Lannion pour
                  le traitement de votre demande.
                </p>

                <h3 className="text-xl font-semibold mt-6">
                  Vos droits
                </h3>
                <p>
                  Conformément au RGPD et à la loi Informatique et Libertés,
                  vous disposez des droits suivants :
                </p>
                <ul className="list-disc space-y-2 pl-6">
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
                    className="font-semibold underline decoration-2 underline-offset-4"
                  >
                    hello@inter-asso.fr
                  </a>
                </p>

                <h3 className="text-xl font-semibold mt-6">
                  Cookies
                </h3>
                <p>
                  Ce site n&apos;utilise aucun cookie de suivi ou de profilage.
                  Aucune donnée de navigation n&apos;est collectée ou
                  enregistrée.
                </p>
              </div>
            </section>

            <section className="border-t-2 border-ink pt-8">
              <h2 className="display mb-6 text-4xl">
                Limitation de responsabilité
              </h2>
              <div className="space-y-4">
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

            <section className="border-t-2 border-ink pt-8">
              <h2 className="display mb-6 text-4xl">
                Loi applicable
              </h2>
              <p>
                Les présentes mentions légales sont régies par la loi française.
                En cas de litige et à défaut d&apos;accord amiable, le litige
                sera porté devant les tribunaux français conformément aux règles
                de compétence en vigueur.
              </p>
            </section>
          </div>

          <div className="mt-14">
            <p className="text-sm text-muted">
              Dernière mise à jour : 24 décembre 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
