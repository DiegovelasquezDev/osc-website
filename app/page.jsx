import BusinessLine from "@/components/BusinessLine";
import Clients from "@/components/Clients";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <BusinessLine />
      <Services />
      <Cta />
    </main>
  );
}
