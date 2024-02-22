import React from "react";

const SmartSolutionsComponent = () => {
  return (
    <div className="h-[200vh]">
      <div className="max-w-full mx-auto">
        <div className="max-h-[500px] relative">
          <div className="absolute w-full h-full max-h-[500px] bg-black/40 flex flex-col justify-center ">
            <div className="flex flex-col items-center">
              <img
                className="w-[240px] h-[240px]"
                src="/Iconos_lineas_de_negocio_blanco_TS.png"
                alt="logo telecoms services - osc"
              />
              <h2 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                Smart Solutions
              </h2>
            </div>
          </div>
          <img
            className="w-full max-h-[500px] object-cover"
            src="/Lineas_de_negocio_TS.jpg"
            alt="telecoms services"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          accusamus ex beatae ut architecto laborum ab pariatur rerum totam odio
          a unde illo officia iure, consectetur voluptatibus officiis quam esse.
        </p>
      </div>
    </div>
  );
};

export default SmartSolutionsComponent;
