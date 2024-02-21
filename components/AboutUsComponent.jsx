import Image from "next/image";
import React from "react";

const AboutUsComponent = () => {
  return (
    <section className="h-[100vh]">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="hidden xl:flex relative">
            <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <h2 className="text-md uppercase font-extrabold mb-4 text-[#EB2566] tracking-[15px] sm:tracking-[2px]">
                SOMOS UN ALIADO REGIONAL E INTEGRADOR TECNOLÓGICO
              </h2>
              <h1 className="h1 mb-2 uppercase">
                CON MÁS DE 25 AÑOS DE EXPERIENCIA
              </h1>
              <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                Somos un integrador tecnológico con presencia en 16
                paises,Contamos con un equipo de más de 1000 colaboradores para
                acompañar a nuestros clientes en el desarrollo de estrategias
                tecnológicas digitales en la optimización de procesos,
                generación de valor y competitividad. Tenemos una experiencia en
                el mercado de más de 27 años
              </p>
            </div>

            <div className="w-[800px] h-[800px] relative">
              <div className="bg-hero w-[800px] h-[800px] bg-no-repeat absolute -top-20 -right-[160px] -z-50"></div>
              <Image
                src="/Latam.png"
                width={1000}
                height={1000}
                alt="Multinacionales OSC"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
