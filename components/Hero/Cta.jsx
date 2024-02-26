import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            ¿Preparado para hacer tus ideas realidad? Estamos aqui para ayudarte
            🫡
          </h2>
          <Link href="/contactUs">
            <Button>Contáctanos</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
