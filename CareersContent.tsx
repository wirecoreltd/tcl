import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import LifeAtTCLContent from "@/components/LifeAtTCLContent";
import CareersCTA from "@/components/CareersCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Life at TCL | Tropical Consulting Ltd",
  description:
    "Behind every successful operation is an incredible team. Discover life, culture and growth at Tropical Consulting Ltd.",
};

export default function LifeAtTCLPage() {
  return (
    <main className="bg-navy min-h-screen">
      <Nav />
      <PageHero eyebrow="Life at TCL" title="People Power Our Success" />
      <LifeAtTCLContent />
      <CareersCTA />
      <Footer />
    </main>
  );
}
