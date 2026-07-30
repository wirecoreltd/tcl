import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import ServicesContent from "@/components/ServicesContent";
import CareersCTA from "@/components/CareersCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Tropical Consulting Ltd",
  description:
    "Customer support, operations management, back office, fraud & risk, CRM operations, business intelligence and process improvement — reliable 24/7.",
};

export default function ServicesPage() {
  return (
    <main className="bg-navy min-h-screen">
      <Nav />
      <PageHero
        eyebrow="Our Services"
        title="Supporting Your Operations 24/7"
        text="From customer support to business operations, we provide reliable services tailored to international digital companies."
      />
      <ServicesContent />
      <CareersCTA />
      <Footer />
    </main>
  );
}
