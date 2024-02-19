"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Wifi } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

// SWIPER
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ServiceCard from "@/components/ServiceCard";

const serviceData = [
  {
    icon: <Wifi className="w-24 h-24" />,
    title: "Datos en la nube",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus dignissimos harum architecto.",
  },
  {
    icon: <Wifi className="w-24 h-24" />,
    title: "Ciberseguridad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus dignissimos harum architecto.",
  },
  {
    icon: <Wifi className="w-24 h-24" />,
    title: "IT/OT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus dignissimos harum architecto.",
  },
  {
    icon: <Wifi className="w-24 h-24" />,
    title: "Conectividad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus dignissimos harum architecto.",
  },
];

const Services = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-6">
            Servicios{" "}
            <span className="absolute inset-x-0 top-12 bottom-0 h-2 bg-gradient-to-r from-[#3A349A] to-[#EB2566] rounded-full"></span>
          </h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            temporibus dignissimos harum architecto.
          </p>
          <Link href="/">
            <Button>Ver más</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={false}
          >
            {serviceData.slice(0, 4).map((service, index) => {
              return (
                <SwiperSlide key={index}>
                  <ServiceCard serviceData={service} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
