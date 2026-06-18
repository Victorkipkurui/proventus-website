import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Approach from "@/components/Approach";
import DOOH from "@/components/DOOH";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Approach />
      <DOOH />
      <Clients />
      <CTA />
      <Footer />
    </main>
  );
}
