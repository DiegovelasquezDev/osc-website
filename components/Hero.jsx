import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send, Footprints } from "lucide-react";

import { RiArrowDownSLine } from "react-icons/ri";

// Components
import HeroImg from "./HeroImg";
import Badge from "./Badge";
import Socials from "./Socials";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom xl:bg-none md:bg-hero md:bg-no-repeat md:bg-bottom">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* image */}
          <div className="hidden xl:flex relative">
            <div className="bg-hero w-[800px] h-[800px] bg-no-repeat absolute -top-20 -right-[160px]"></div>
            <HeroImg
              containerStyles="w-[510px] h-[462px] relative"
              imgSrc="/home/world.png"
            />
          </div>

          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-[#EB2566] tracking-[4px] sm:tracking-[2px]">
              Integradores de soluciones tecnologicas
            </div>
            <h1 className="h1 mb-4 uppercase">Osc top solutions group</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Con un equipo de 1000+ expertos y 27 años de experiencia,
              lideramos la transformación tecnológica para optimizar procesos,
              generar valor y elevar tu competitividad.
            </p>

            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/aboutUs">
                <Button className="gap-x-2">
                  Conoce más <Footprints size={18} />
                </Button>
              </Link>
              <Link href="/contactUs">
                <Button className="gap-x-2" variant="secondary">
                  Contáctanos <Send size={18} />
                </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Image
                src="/home/Data.png"
                width={300}
                height={300}
                priority
                alt="data osc"
              />
            </div>
            {/* socials */}
            {/* <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-secondary  transition-all"
            /> */}
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
