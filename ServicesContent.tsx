import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import ContactContent from "@/components/ContactContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Tropical Consulting Ltd",
  description:
    "Get in touch with Tropical Consulting Ltd — based in Mauritius, supporting global operations 24/7.",
};

export default function ContactPage() {
  return (
    <main className="bg-navy min-h-screen">
      <Nav />
      <PageHero eyebrow="Contact" title="Let's Start a Conversation" />
      <ContactContent />
      <Footer />
    </main>
  );
}
