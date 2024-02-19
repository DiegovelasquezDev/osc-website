import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send, Footprints } from "lucide-react";

import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiGroupFill,
  RiTeamFill,
} from "react-icons/ri";

// Components
import EarthCanvas from "./Earth";
import Badge from "./Badge";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[100vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* bage #1 */}
            <Badge
              containerStyles="absolute top-[5%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={27}
              badgeText={"Años de experiencia"}
            />
            {/* bage #2 */}
            <Badge
              containerStyles="absolute top-[38%] -right-[5rem]"
              icon={<RiTeamFill />}
              endCountNum={1}
              endCountText="k"
              badgeText={"Colaboradores y expertos"}
            />
            {/* bage #3 */}
            <Badge
              containerStyles="absolute top-[60%] -left-[5rem]"
              icon={<RiGroupFill />}
              endCountNum={44}
              endCountText="+"
              badgeText={"Clientes"}
            />
            <div className="w-[520px] h-[472px] relative">
              <div className="bg-hero w-[800px] h-[800px] bg-no-repeat absolute -top-20 -right-[160px]"></div>
              <Image
                src="/prueba.gif"
                width={500}
                height={500}
                alt="Multinacionales OSC"
                priority
              />
              {/* <EarthCanvas /> */}
            </div>
          </div>

          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <h2 className="text-md uppercase font-extrabold mb-4 text-[#EB2566] tracking-[15px] sm:tracking-[2px]">
              Integradores de soluciones tecnologicas
            </h2>
            <h1 className="h1 mb-2 uppercase">Osc top solutions group</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Somos un integrador tecnológico con presencia en 16
              paises,Contamos con un equipo de más de 1000 colaboradores para
              acompañar a nuestros clientes en el desarrollo de estrategias
              tecnológicas digitales en la optimización de procesos, generación
              de valor y competitividad. Tenemos una experiencia en el mercado
              de más de 27 años
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
