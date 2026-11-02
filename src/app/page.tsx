import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ClubsSection from "@/components/ClubsSection";
import EvenementsSection from "@/components/EvenementsSection";
import PartenairesSection from "@/components/PartenairesSection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE.name },
  description:
    "L'Inter-Asso rassemble les clubs étudiants de l'IUT de Lannion. Découvrez nos clubs, événements, partenaires et rejoignez la vie étudiante !",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ClubsSection />
      <PartenairesSection />
      <EvenementsSection />
    </>
  );
}
