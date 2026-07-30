import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import CareersContent from "@/components/CareersContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers | Tropical Consulting Ltd",
  description:
    "Join an international company where your ideas matter and your career can grow. View open positions at Tropical Consulting Ltd.",
};

export default function CareersPage() {
  return (
    <main className="bg-navy min-h-screen">
      <Nav />
      <PageHero
        eyebrow="Careers"
        title="Build Your Future With TCL"
        text="Join an international company where your ideas matter and your career can grow."
      />
      <CareersContent />
      <Footer />
    </main>
  );
}
