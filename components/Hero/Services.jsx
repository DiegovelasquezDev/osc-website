"use client";
import { WifiIcon, Cloud, Server, ShieldCheckIcon } from "lucide-react";

const cardsData = [
  {
    title: "Data Cloud",
    text: "Descubre la vanguardia del almacenamiento empresarial con DataCloud. Transformamos la gestión de datos en una experiencia eficiente y escalable. Desde archivos esenciales hasta información crítica, nuestra plataforma redefine el almacenamiento, proporcionando acceso instantáneo, seguridad avanzada y flexibilidad incomparable. Eleva tu capacidad de almacenamiento a nuevas alturas y desbloquea un potencial sin límites con DataCloud.",
    imageSrc: "/services/service-1.png",
    icon: <Cloud />,
  },
  {
    title: "Ciberseguridad",
    text: "En un mundo digitalmente conectado, la ciberseguridad no es solo una necesidad, es una garantía de supervivencia. Nuestros servicios de ciberseguridad te ofrecen una fortaleza digital impenetrable. Desde la prevención proactiva hasta la respuesta rápida, estamos aquí para salvaguardar tus datos, sistemas y reputación. No dejes que las amenazas digitales te tomen desprevenido; elige la confianza y la protección con nuestros servicios de ciberseguridad de vanguardia",
    imageSrc: "/services/service-2.png",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "IT / OT",
    text: "En el corazón de la revolución digital, nuestra suite de servicios IT/OT impulsa la eficiencia y el rendimiento de tu empresa. Desde la gestión inteligente de sistemas hasta la optimización de procesos operativos, ofrecemos soluciones tecnológicas avanzadas que desbloquean el máximo potencial de tu infraestructura. Mantente a la vanguardia con nuestras soluciones IT/OT y experimenta un nuevo estándar de eficiencia empresarial.",
    imageSrc: "/services/service-3.png",
    icon: <Server />,
  },
  {
    title: "NetConnect Connectivity",
    text: "NetConnect no es simplemente una conexión; es un portal hacia la innovación y la conectividad sin fronteras. Nuestra plataforma revoluciona la forma en que te conectas con el mundo. Velocidades relámpago, fiabilidad incomparable y una experiencia de usuario sin igual. Rompe barreras y lleva tu conectividad a nuevas alturas con NetConnect. Conéctate, comunica y conquista con la revolución de la conectividad.",
    imageSrc: "/services/service-4.png",
    icon: <WifiIcon />,
  },
];

const Card = ({ title, text, imageSrc, icon }) => {
  return (
    <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-md">
      <div className="w-full h-16 flex items-center justify-center bg-[#3A349A]">
        <span className="text-white text-2xl">{icon}</span>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
    </div>
  );
};

const Services = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestros servicios
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Descubre la potencia de nuestros servicios: DataCloud para
            almacenamiento eficiente, Ciberseguridad para protección total, IT
            para soluciones tecnológicas avanzadas, y NetConnect para una
            conectividad sin límites. Transformamos la tecnología en ventaja
            competitiva para tu negocio.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
