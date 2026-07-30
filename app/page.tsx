import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyTCL from "@/components/WhyTCL";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import LifeAtTCL from "@/components/LifeAtTCL";
import CareersCTA from "@/components/CareersCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-navy min-h-screen">
      <Nav />
      <Hero />
      <WhyTCL />
      <Services />
      <HowWeWork />
      <LifeAtTCL />
      <CareersCTA />
      <Footer />
    </main>
  );
}
