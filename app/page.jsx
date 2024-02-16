import BusinessLine from "@/components/BusinessLine";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <main>
      <Hero />
      <BusinessLine />
      <Services />
      <Clients />
    </main>
  );
}
