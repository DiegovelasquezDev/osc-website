import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Partners = () => {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-4 md:gap-16">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Explora Nuestro{" "}
              <span className="bg-gradient-to-r from-[#3A349A] to-[#EB2566] text-transparent bg-clip-text">
                Ecosistema
              </span>{" "}
              de Aliados
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              En nuestro ecosistema de aliados, la innovación es la moneda de
              cambio, y las conexiones son el puente hacia oportunidades
              ilimitadas.
            </p>
            <Link href="/clients">
              <Button className="gap-x-2 mt-4 md:mt-2">Conoce más</Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            alt="Hero"
            className="w-[500px] h-[500px] object-cover mb-56"
            src="/Ecosistema.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
