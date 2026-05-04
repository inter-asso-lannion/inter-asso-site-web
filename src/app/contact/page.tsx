import type { Metadata } from "next";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import Link from "next/link";
import { IconInstagram } from "@/components/icons";
import ContactForm from "./ContactForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nous contacter",
  description:
    "Contacte l'Inter-Asso IUT de Lannion par email, Discord ou via notre formulaire. Rejoins-nous, propose un partenariat ou pose-nous tes questions.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Nous contacter"
        subtitle="Une question, une suggestion ou envie de nous rejoindre ? Écris-nous !"
        paddingY="py-16 md:py-20"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Nos coordonnées
                </h2>

                <div className="bg-white rounded-xl p-6 shadow-md mb-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Mail className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:hello@inter-asso.fr"
                        className="text-purple-600 hover:text-purple-700 font-medium"
                      >
                        hello@inter-asso.fr
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Nous répondrons au plus vite !
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md mb-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                        <MessageSquare className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        Discord
                      </h3>
                      <a
                        href="https://discord.gg/BG62QR77pP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 font-medium"
                      >
                        Rejoins notre serveur
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Discute avec la communauté
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md mb-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-14 h-14 bg-linear-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <MapPin className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        Adresse
                      </h3>
                      <p className="text-gray-700">
                        Inter-Asso IUT de Lannion
                        <br />
                        Rue Édouard Branly
                        <br />
                        22300 Lannion, France
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=IUT+Lannion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-orange-600 hover:text-orange-700 font-medium text-sm"
                      >
                        Voir sur Google Maps →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">
                    Suivez-nous
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/inter_asso"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 text-white rounded-full hover:scale-110 transition-transform shadow-lg"
                      aria-label="Instagram"
                    >
                      <IconInstagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>

            <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Questions fréquentes
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Comment rejoindre un club ?
                  </h3>
                  <p className="text-gray-600">
                    Consulte notre page{" "}
                    <Link
                      href="/clubs"
                      className="text-purple-600 hover:underline"
                    >
                      Clubs
                    </Link>{" "}
                    et contacte directement le club qui t&apos;intéresse via
                    leurs réseaux sociaux.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Comment devenir partenaire ?
                  </h3>
                  <p className="text-gray-600">
                    Envoie-nous un email à{" "}
                    <a
                      href="mailto:hello@inter-asso.fr"
                      className="text-purple-600 hover:underline"
                    >
                      hello@inter-asso.fr
                    </a>{" "}
                    en expliquant ton projet de partenariat.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Où trouver les événements à venir ?
                  </h3>
                  <p className="text-gray-600">
                    Retrouve tous nos événements sur notre{" "}
                    <a
                      href="https://instagram.com/inter_asso"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:underline"
                    >
                      Instagram
                    </a>{" "}
                    et notre serveur Discord.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Vous avez une idée d&apos;événement ?
                  </h3>
                  <p className="text-gray-600">
                    Contacte-nous via le formulaire ci-dessus en sélectionnant
                    &quot;Autre&quot; comme sujet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
