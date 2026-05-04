import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FOOTER_LINKS } from "@/data/navigation";
import { IconFacebook, IconInstagram, IconGithub } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">INTER-ASSO IUT Lannion</h3>
            <p className="text-gray-400 mb-4">
              L&apos;association qui rassemble tous les clubs et dynamise la vie
              étudiante de l&apos;IUT de Lannion.
            </p>
            <div className="flex items-start gap-2 text-gray-400">
              <MapPin className="h-5 w-5 shrink-0 mt-1" />
              <span>
                IUT de Lannion
                <br />
                7 Rue Édouard Branly
                <br />
                22300 Lannion
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Nous contacter</h3>
            <div className="flex items-center gap-2 text-gray-400 mb-4">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:hello@inter-asso.fr"
                className="hover:text-white transition-colors"
              >
                hello@inter-asso.fr
              </a>
            </div>

            <h4 className="font-semibold mb-3">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/interasso22"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors"
                aria-label="Facebook"
              >
                <IconFacebook />
              </a>
              <a
                href="https://instagram.com/inter_asso"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} INTER-ASSO IUT Lannion.</p>
            <a
              href="https://github.com/inter-asso-lannion/inter-asso-site-web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors group"
            >
              <IconGithub className="group-hover:scale-110 transition-transform" />
              <span>Contribuer au projet sur GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
