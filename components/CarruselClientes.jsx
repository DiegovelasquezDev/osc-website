import Image from "next/image";
import React from "react";

const logos = [
  {
    id: 1,
    img: "url_logo_1",
  },
  {
    id: 2,
    img: "url_logo_2",
  },
  {
    id: 3,
    img: "url_logo_3",
  },
];

const CarruselClientes = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex-shrink-0">
        <h3 className="h3 mb-3">Nuestros clientes</h3>
      </div>
      <div className="bg-primary h-[100px] w-[80%] rounded-lg flex items-center justify-center shadow-md">
        {/* {logos.map((logo) => (
          <img
            key={logo.id}
            src={logo.img}
            alt={`Logo ${logo.id}`}
            className="h-[80px] w-[auto] object-contain"
          />
        ))} */}
        <Image
          src="/Logos.png"
          width={500}
          height={500}
          alt="logos clientes"
          priority
        />
      </div>
    </div>
  );
};

export default CarruselClientes;
