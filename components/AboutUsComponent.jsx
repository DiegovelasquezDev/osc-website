import React from "react";
import EarthModel from "@/components/models/Earth";

const AboutUsComponent = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="lg:order-2">
            <EarthModel />
          </div>
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                SOMOS UN{" "}
                <span className="bg-gradient-to-r from-[#3A349A] to-[#EB2566] text-transparent bg-clip-text">
                  ALIADO{" "}
                </span>
                REGIONAL E INTEGRADOR{" "}
                <span className="bg-gradient-to-r from-[#3A349A] to-[#EB2566] text-transparent bg-clip-text">
                  TECNOLÓGICO
                </span>
              </h2>
              <p className="max-w-[600px] md:mx-auto text-gray-500 md:text-lg dark:text-gray-400">
                Somos un integrador tecnológico con presencia en 16 países.
                Contamos con un equipo de más de 1000 colaboradores para
                acompañar a nuestros clientes en el desarrollo de estrategias
                tecnológicas digitales, en la optimización de procesos,
                generación de valor y competitividad. Tenemos una experiencia en
                el mercado de más de 27 años.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
