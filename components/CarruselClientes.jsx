"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// SWIPER
import "swiper/css";
import "swiper/css/pagination";

const logos = [
  {
    id: 1,
    img: "/logos/CLIENTES-01.png",
  },
  {
    id: 2,
    img: "/logos/CLIENTES-02.png",
  },
  {
    id: 3,
    img: "/logos/CLIENTES-03.png",
  },
  {
    id: 4,
    img: "/logos/CLIENTES-01.png",
  },
  {
    id: 5,
    img: "/logos/CLIENTES-02.png",
  },
  {
    id: 6,
    img: "/logos/CLIENTES-03.png",
  },
  {
    id: 7,
    img: "/logos/CLIENTES-01.png",
  },
  {
    id: 8,
    img: "/logos/CLIENTES-02.png",
  },
  {
    id: 9,
    img: "/logos/CLIENTES-03.png",
  },
];

const CarruselClientes = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex-shrink-0 mb-3">
        <h3 className="h1 font-semibold">Nuestros clientes</h3>
      </div>
      <div className="w-[70%]">
        <Swiper
          className="h-[140px] w-full"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={false}
        >
          {logos.slice(0, 10).map((logo, index) => {
            return (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center mb-12"
              >
                <img
                  key={logo.id}
                  src={logo.img}
                  className="max-h-full max-w-full dark:filter-brightness-0 dark:invert-1"
                  // style={{ filter: "brightness(0) invert(1)" }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CarruselClientes;
