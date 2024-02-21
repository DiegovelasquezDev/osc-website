import BusinessLine from "@/components/BusinessLine";
import Partners from "@/components/Partners";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Partners />
        <BusinessLine />
        <Services />
        <Cta />
      </div>
    </main>
  );
}
