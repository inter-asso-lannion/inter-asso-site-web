import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { IconInstagram } from "@/components/icons";
import ContactForm from "./ContactForm";
import PageHeader from "@/components/PageHeader";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Nous contacter",
  description:
    "Contacte l'Inter-Asso IUT de Lannion par email, Discord ou via notre formulaire. Rejoins-nous, propose un partenariat ou pose-nous tes questions.",
  path: "/contact",
});

const lienClass = "font-semibold underline decoration-2 underline-offset-4 hover:decoration-magenta";

const FAQ = [
  {
    question: "Comment rejoindre un club ?",
    reponse: (
      <>
        Consulte notre page{" "}
        <Link href="/clubs" className={lienClass}>
          Clubs
        </Link>{" "}
        et contacte directement le club qui t&apos;intéresse via leurs réseaux sociaux.
      </>
    ),
  },
  {
    question: "Comment devenir partenaire ?",
    reponse: (
      <>
        Envoie-nous un email à{" "}
        <a href={`mailto:${SITE.email}`} className={lienClass}>
          {SITE.email}
        </a>{" "}
        en expliquant ton projet de partenariat.
      </>
    ),
  },
  {
    question: "Où trouver les événements à venir ?",
    reponse: (
      <>
        Retrouve tous nos événements sur notre{" "}
        <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className={lienClass}>
          Instagram
        </a>{" "}
        et notre serveur Discord.
      </>
    ),
  },
  {
    question: "Vous avez une idée d'événement ?",
    reponse: <>Contacte-nous via le formulaire en sélectionnant « Autre » comme sujet.</>,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Nous contacter"
        path="/contact"
        lead="Une question, une suggestion ou envie de nous rejoindre ? Écris-nous !"
      />

      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_1.3fr]">
        <section aria-labelledby="titre-coordonnees">
          <h2 id="titre-coordonnees" className="display text-4xl">
            Nos coordonnées
          </h2>
          <dl className="mt-8">
            <div className="border-t-2 border-ink py-5">
              <dt className="text-muted">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${SITE.email}`} className="narrow text-2xl font-extrabold hover:underline">
                  {SITE.email}
                </a>
                <p className="text-muted">Nous répondrons au plus vite !</p>
              </dd>
            </div>
            <div className="border-t-2 border-ink py-5">
              <dt className="text-muted">Discord</dt>
              <dd className="mt-1">
                <a
                  href={SITE.social.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="narrow text-2xl font-extrabold hover:underline"
                >
                  Rejoins notre serveur
                </a>
                <p className="text-muted">Discute avec la communauté</p>
              </dd>
            </div>
            <div className="border-t-2 border-ink py-5">
              <dt className="text-muted">Adresse</dt>
              <dd className="mt-1">
                <address className="not-italic">
                  Inter-Asso IUT de Lannion
                  <br />
                  {SITE.address.street}
                  <br />
                  {SITE.address.postalCode} {SITE.address.city}, France
                </address>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=IUT+Lannion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-block ${lienClass}`}
                >
                  Voir sur Google Maps
                </a>
              </dd>
            </div>
            <div className="border-t-2 border-ink py-5">
              <dt className="text-muted">Suivez-nous</dt>
              <dd className="mt-2">
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold hover:underline"
                >
                  <IconInstagram className="h-5 w-5" />
                  @inter_asso
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <ContactForm />
      </div>

      <section className="bg-granit" aria-labelledby="titre-faq">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
          <h2 id="titre-faq" className="display text-5xl">
            Questions fréquentes
          </h2>
          <div className="mt-10">
            {FAQ.map(({ question, reponse }) => (
              <details key={question} className="group border-t-2 border-ink py-5 last:border-b-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold">
                  {question}
                  <ChevronDownIcon className="h-6 w-6 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none" />
                </summary>
                <p className="mt-3 max-w-2xl text-lg">{reponse}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
