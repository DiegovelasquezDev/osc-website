// Icons
import { Wifi, Handshake, Briefcase, Lightbulb } from "lucide-react";
// Components ui
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const servicesData = [
  {
    icon: <Wifi size={72} strokeWidth={0.8} />,
    title: "Servicio 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ex incidunt officia architecto et ducimus pariatur recusandae ut culpa reiciendis assumenda, quia eveniet fugiat aliquid at laborum beatae eaque aperiam.",
    path: "",
  },
  {
    icon: <Lightbulb size={72} strokeWidth={0.8} />,
    title: "Servicio 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ex incidunt officia architecto et ducimus pariatur recusandae ut culpa reiciendis assumenda, quia eveniet fugiat aliquid at laborum beatae eaque aperiam.",
    path: "",
  },
  {
    icon: <Handshake size={72} strokeWidth={0.8} />,
    title: "Servicio 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ex incidunt officia architecto et ducimus pariatur recusandae ut culpa reiciendis assumenda, quia eveniet fugiat aliquid at laborum beatae eaque aperiam.",
    path: "",
  },
  {
    icon: <Briefcase size={72} strokeWidth={0.8} />,
    title: "Servicio 4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ex incidunt officia architecto et ducimus pariatur recusandae ut culpa reiciendis assumenda, quia eveniet fugiat aliquid at laborum beatae eaque aperiam.",
    path: "",
  },
];

const Services = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Servicios
        </h2>
        {/* Grid items */}
        <div className="grid xl:grid-cols-2 justify-items-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((service, index) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[480px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-background dark:bg-background flex justify-center items-center text-black dark:text-white">
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
