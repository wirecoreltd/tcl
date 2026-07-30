import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import AboutContent from "@/components/AboutContent";
import CareersCTA from "@/components/CareersCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Tropical Consulting Ltd",
  description:
    "Founded in Mauritius in 2020, Tropical Consulting Ltd delivers dependable 24/7 operational support to international businesses.",
};

export default function AboutPage() {
  return (
    <main className="bg-navy min-h-screen">
      <Nav />
      <PageHero
        eyebrow="About TCL"
        title="About Tropical Consulting Ltd"
      />
      <AboutContent />
      <CareersCTA />
      <Footer />
    </main>
  );
}
