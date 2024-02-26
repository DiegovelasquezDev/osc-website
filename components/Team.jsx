"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// SWIPER
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
    <section className="w-full py-8 md:py-12 lg:py-16 xl:py- ">
      <div className="container px-4 mx-auto">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            Nuestro equipo
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 text-center md:text-lg lg:text-base dark:text-gray-400">
            Te mostramos nuestras caras más importantes para que te familiarices
            con nosotros.
          </p>
        </div>
        <div className="mx-auto max-w-screen-xl mt-10">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ clickable: true, dynamicBullets: true }}
            loop={true}
            navigation={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            {teamData.map((member, index) => (
              <SwiperSlide key={index}>
                <TeamCard teamData={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
