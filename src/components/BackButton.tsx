"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function BackButton() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-7 py-3 font-semibold hover:bg-jaune"
    >
      <ArrowLeftIcon className="h-5 w-5" />
      Page précédente
    </button>
  );
}
