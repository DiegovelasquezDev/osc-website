"use client";
// ClientSlider.js
import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// SWIPER
import "swiper/css";
import "swiper/css/pagination";

const ClientSlider = () => {
  const clients = [
    "/logos/CLIENTES-01.png",
    "/logos/CLIENTES-02.png",
    "/logos/CLIENTES-03.png",
    "/logos/CLIENTES-04.png",
    "/logos/CLIENTES-05.png",
    "/logos/CLIENTES-06.png",
    "/logos/CLIENTES-07.png",
    "/logos/CLIENTES-08.png",
    "/logos/CLIENTES-09.png",
    "/logos/CLIENTES-10.png",
  ];

  return (
    <div className="w-full py-12 -mt-60">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-semibold tracking-tighter sm:text-5xl">
              Nuestros Clientes
            </div>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Nos enorgullece contar con la confianza de estos destacados
              clientes, quienes han sido parte fundamental de nuestro éxito.
            </p>
          </div>
          <div className="w-full max-w-3xl mx-auto bg-background bg-opacity-20 border rounded-[30px] p-4 shadow-lg">
            <Swiper
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                },
              }}
              spaceBetween={30}
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              navigation={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
              {clients.map((client, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <img
                    src={client}
                    alt={`Cliente ${index + 1}`}
                    className="max-w-full max-h-20"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
