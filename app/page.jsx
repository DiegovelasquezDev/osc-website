import BusinessLine from "@/components/Hero/BusinessLine";
import Partners from "@/components/Hero/Partners";
import Cta from "@/components/Hero/Cta";
import Services from "@/components/Hero/Services";
import CarruselHero from "@/components/Hero/CarruselHero";
import ClientSlider from "@/components/ClientSlider";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <CarruselHero />
        <Partners />
        <ClientSlider />
        <BusinessLine />
        <Services />
        <Cta />
      </div>
    </main>
  );
}
