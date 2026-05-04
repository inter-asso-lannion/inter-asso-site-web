"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpwvgpwe", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 8000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Envoie-nous un message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="nom"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Nom complet *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="Jean Dupont"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="_replyto"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="jean.dupont@exemple.fr"
          />
        </div>

        <div>
          <label
            htmlFor="telephone"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="06 12 34 56 78"
          />
        </div>

        <div>
          <label
            htmlFor="sujet"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Sujet *
          </label>
          <select
            id="sujet"
            name="_subject"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          >
            <option value="">Choisis un sujet</option>
            <option value="[Contact] Demande d'information">
              Demande d&apos;information
            </option>
            <option value="[Contact] Rejoindre un club">
              Rejoindre un club
            </option>
            <option value="[Contact] Devenir partenaire">
              Devenir partenaire
            </option>
            <option value="[Contact] Question sur un événement">
              Question sur un événement
            </option>
            <option value="[Contact] Autre">Autre</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
            placeholder="Écris ton message ici..."
          />
        </div>

        <input type="hidden" name="_captcha" value="false" />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-linear-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <Send className="h-5 w-5" />
          <span>
            {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
          </span>
        </button>

        <p className="text-sm text-gray-500 text-center">
          * Champs obligatoires
        </p>

        {status === "success" && (
          <div className="bg-green-50 border-2 border-green-500 text-green-800 px-4 py-3 rounded-lg">
            <p className="font-semibold">✓ Message envoyé avec succès !</p>
            <p className="text-sm mt-1">
              Nous te répondrons dans les plus brefs délais.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-50 border-2 border-red-500 text-red-800 px-4 py-3 rounded-lg">
            <p className="font-semibold">Une erreur est survenue</p>
            <p className="text-sm mt-1">
              Réessaye plus tard ou contacte-nous directement par email.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
