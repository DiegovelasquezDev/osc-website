import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TeamCard = ({ teamData }) => {
  return (
    <Card className="w-[340px] h-[400px] mx-[5px] mb-8 relative overflow-hidden bg-bgcards bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center h-full">
      <div className="hexagon-container relative w-[200px] h-[200px] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-md hexagon-clip"
          src={teamData.img}
          alt="Hexagon Image"
        />
      </div>


        <div className="p-4 space-y-2">
          <CardHeader className="pb-0">
            <CardTitle>{teamData.title}</CardTitle>
            <CardDescription>{teamData.description}</CardDescription>
          </CardHeader>
        </div>
      </div>
    </Card>
  );
};

export default TeamCard;
