"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { Footprints } from "lucide-react";
import CarruselClientes from "./CarruselClientes";

const Partners = () => {
  return (
    <section className="pb-12 xl:py-12 mb-12 xl:mb-36 dark:bg-[#030E27] bg-[#FCFCFC]">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(0.5)}
              className="h1 mb-2 uppercase"
            >
              Explora Nuestro{" "}
              <span className="bg-gradient-to-r from-[#3A349A] to-[#EB2566] text-transparent bg-clip-text">
                Ecosistema
              </span>{" "}
              de Aliados
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(0.7)}
              className="subtitle max-w-[490px] mx-auto xl:mx-0"
            >
              Bienvenido a un espacio donde la colaboración se convierte en
              sinergia y el éxito se construye colectivamente. En nuestro
              ecosistema de aliados, la innovación es la moneda de cambio, y las
              conexiones son el puente hacia oportunidades ilimitadas. Únete a
              nosotros y forma parte de una red que impulsa el crecimiento
              mutuo. Descubre cómo juntos podemos alcanzar nuevas alturas.
              ¡Bienvenido al poder de la colaboración!
            </motion.p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/clients">
                <Button className="gap-x-2">
                  Conoce más <Footprints size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/Ecosistema.png"
              width={700}
              height={700}
              alt="Ecosistema osc"
              priority
            />
          </div>
        </div>
        <div className="mt-36">
          <CarruselClientes />
        </div>
      </div>
    </section>
  );
};

export default Partners;
