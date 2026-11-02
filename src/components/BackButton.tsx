"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function BackButton() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
    >
      <ArrowLeftIcon className="h-5 w-5" />
      Retour
    </button>
  );
}
