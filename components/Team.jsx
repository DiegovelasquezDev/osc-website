"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Wifi } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

// SWIPER
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import TeamCard from "@/components/TeamCard";

const teamData = [
  {
    img: "/teams/Mauricio.jpg",
    title: "Mauricio Rubio O.",
    description:
      "Chief Executive Officer LATAM & USA mauricio.rubio@osctopsolutionsgroup.com",
  },
  {
    img: "",
    title: "Santiago Rivera",
    description:
      "Director General LATAM & USA santiago.rivera@osctopsolutionsgroup.com",
  },
  {
    img: "",
    title: "Angelica D'Haro E",
    description: "Global BDM  angelica.dharo@osctopsolutionsgroup.com ",
  },
  {
    img: "",
    title: "Andres Gallego",
    description: "CCO & CMO andres.gallego@osctopsolutionsgroup.com ",
  },
  {
    img: "",
    title: "Camilo Lozano",
    description:
      "Chief Operating Officer camilo.lozano@osctopsolutionsgroup.com ",
  },
  {
    img: "",
    title: "Telmo Paredes",
    description:
      "Country Manager Ecuador telmo.paredes@osctopsolutionsgroup.com",
  },
  {
    img: "",
    title: "Ana Maria Correa",
    description: "Country  Manager  USA ana.correa@osctopsolutionsgroup.com",
  },
  {
    img: "",
    title: "Carolina Henao Vanegas",
    description:
      "Regional Manager México y Centro América carolina.henao@osctopsolutionsgroup.com ",
  },
  {
    img: "",
    title: "Juan Felipe Giraldo Cano",
    description:
      "Regional Manager Andino y Austral juan.giraldo@osctopsolutionsgroup.com",
  },
  {
    img: "",
    title: "David Rojas Pantoja",
    description:
      "Ingeniero Preventa Regional david.rojas@osctopsolutionsgroup.com",
  },
];

const Team = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-6">
            Nuestro Equipo{" "}
            <span className="absolute inset-x-0 top-12 bottom-0 h-2 bg-gradient-to-r from-[#3A349A] to-[#EB2566] rounded-full"></span>
          </h2>
          <p className="subtitle mb-8">
            Te mostramos nuestras caras más Importantes para que te familiarices
            con nosotros
          </p>
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
            {teamData.slice(0, 10).map((service, index) => {
              return (
                <SwiperSlide key={index}>
                  <TeamCard teamData={service} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
