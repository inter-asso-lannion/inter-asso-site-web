import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ClubsSection from "@/components/ClubsSection";
import PartenairesSection from "@/components/PartenairesSection";
import ContactBandeau from "@/components/ContactBandeau";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "L'Inter-Asso rassemble les clubs étudiants de l'IUT de Lannion. Découvrez nos clubs, événements, partenaires et rejoignez la vie étudiante !",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ClubsSection />
      <PartenairesSection />
      <ContactBandeau />
    </main>
  );
}
