"use client";

import { useState, type FormEvent } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

type FormStatus = "idle" | "sending" | "success" | "error";

// Identifiant Formspree : configurable dans .env.local (voir README)
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "xpwvgpwe";

const champClass =
  "mt-2 w-full rounded-md border-2 border-ink/25 bg-paper px-4 py-3 text-base hover:border-ink/50 focus:border-ink focus:outline-none focus-visible:outline-3 focus-visible:outline-bleu";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section aria-labelledby="titre-formulaire" className="rounded-lg border-2 border-ink p-6 md:p-10">
      <h2 id="titre-formulaire" className="display text-4xl">
        Envoie-nous un message
      </h2>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="font-semibold">
          Nom complet <span aria-hidden="true">*</span>
          <input type="text" name="nom" required autoComplete="name" className={champClass} placeholder="Jean Dupont" />
        </label>

        <label className="font-semibold">
          Email <span aria-hidden="true">*</span>
          <input
            type="email"
            name="_replyto"
            required
            autoComplete="email"
            className={champClass}
            placeholder="jean.dupont@exemple.fr"
          />
        </label>

        <label className="font-semibold">
          Téléphone
          <input type="tel" name="telephone" autoComplete="tel" className={champClass} placeholder="06 12 34 56 78" />
        </label>

        <label className="font-semibold">
          Sujet <span aria-hidden="true">*</span>
          <select name="_subject" required defaultValue="" className={champClass}>
            <option value="" disabled>
              Choisis un sujet
            </option>
            <option value="[Contact] Demande d'information">Demande d&apos;information</option>
            <option value="[Contact] Rejoindre un club">Rejoindre un club</option>
            <option value="[Contact] Devenir partenaire">Devenir partenaire</option>
            <option value="[Contact] Question sur un événement">Question sur un événement</option>
            <option value="[Contact] Autre">Autre</option>
          </select>
        </label>

        <label className="font-semibold sm:col-span-2">
          Message <span aria-hidden="true">*</span>
          <textarea
            name="message"
            required
            rows={6}
            className={`${champClass} resize-y`}
            placeholder="Écris ton message ici..."
          />
        </label>

        <input type="hidden" name="_captcha" value="false" />

        <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">* Champs obligatoires</p>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-paper hover:bg-magenta disabled:cursor-wait disabled:opacity-60"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
            {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
          </button>
        </div>

        <div aria-live="polite" className="sm:col-span-2">
          {status === "success" && (
            <p className="rounded-md bg-lime px-4 py-3">
              <strong>Message envoyé.</strong> Nous te répondrons dans les plus brefs délais.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-md border-2 border-magenta px-4 py-3">
              <strong>Le message n&apos;est pas parti.</strong> Réessaye plus tard ou écris-nous
              directement à hello@inter-asso.fr.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
