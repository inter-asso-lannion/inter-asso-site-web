import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function ContactBandeau() {
  return (
    <section className="py-12 md:py-16 bg-linear-to-r from-purple-600 to-pink-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une question ? Contacte-nous !
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8">
            Notre équipe est là pour répondre à toutes tes questions
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="mailto:hello@inter-asso.fr"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <span className="font-medium">hello@inter-asso.fr</span>
            </a>

            <a
              href="tel:+33296469090"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <span className="font-medium">02 96 46 93 00</span>
            </a>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
          >
            Accéder au formulaire de contact
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
