import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Link2Icon } from "lucide-react";

const ServiceCard = ({ serviceData }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-primary dark:bg-secondary/40 xl:bg-[110%] overflow-hidden">
          Imagen
          {/* <Image
            className="absolute bottom-8 shadow-2xl"
            src=""
            width={247}
            height={250}
            alt={serviceData.tilte}
            priority
          /> */}
          <div>
            <Link
              href="#"
              className="bg-slate-800 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <h3 className="h3 mb-1">{serviceData.title}</h3>
        <p className="text-muted-foreground text-lg">
          {serviceData.description}
        </p>
      </div>
    </Card>
  );
};

export default ServiceCard;
