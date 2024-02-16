import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Send, Footprints } from "lucide-react";
import Link from "next/link";

const Clients = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Clientes
        </h2>
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-xl uppercase font-bold mb-4 tracking-[4px] sm:tracking-[2px]">
              Aliados estrátegicos con{" "}
              <span className="text-slate-400">expertos de áreas de</span> alto
              impacto <span className="">y temas de</span>
            </div>
            <h2 className="h1 mb-4 uppercase text-[#EB2566] ">
              Ciberseguridad
            </h2>
            <span className=""></span>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Redes privadas, soluciones transaccionales, internet de las cosas.
            </p>

            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/clients">
                <Button className="gap-x-2 bg-transparent text-black outline dark:text-white dark:outline-white">
                  Conoce más <Footprints size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex relative">
            <div className="w-[520px] h-[472px] relative">
              <Image
                src={"/clients/ClientesEstrategicos.png"}
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
