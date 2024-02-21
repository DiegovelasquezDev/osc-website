import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Link2Icon } from "lucide-react";

const TeamCard = ({ teamData }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-primary dark:bg-secondary/40 xl:bg-[110%] overflow-hidden">
          <Image
            className="absolute shadow-2xl w-[230px] h-[270px] rounded-xl"
            src={teamData.img}
            width={247}
            height={250}
            alt={teamData.title}
            priority
          />
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
        <h3 className="h3 mb-1">{teamData.title}</h3>
        <p className="text-muted-foreground text-lg">{teamData.description}</p>
      </div>
    </Card>
  );
};

export default TeamCard;
