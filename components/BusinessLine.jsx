import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User } from "lucide-react";

const telecomsData = [
  {
    title: "",
    data: [],
  },
];

const workforceData = [
  {
    title: "",
    data: [],
  },
];

const bpoData = [
  {
    title: "",
    data: [],
  },
];

const smartSolutionsData = [
  {
    title: "",
    data: [],
  },
];

const BusinessLine = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Lineas de negocio
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* tabas */}
          <div className="flex-1">
            <Tabs defaultValue="telecoms">
              <TabsList>
                <TabsTrigger value="telecoms">Telecoms services</TabsTrigger>
                <TabsTrigger value="smartsolutions">
                  Smart Solutions
                </TabsTrigger>
                <TabsTrigger value="bpo">BPO</TabsTrigger>
                <TabsTrigger value="workforce">WorkForce Managment</TabsTrigger>
              </TabsList>
              {/*  */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="telecoms"> Telecoms</TabsContent>
                <TabsContent value="smartsolutions">smartsolutions</TabsContent>
                <TabsContent value="bpo"> bpo</TabsContent>
                <TabsContent value="workforce"> workforce</TabsContent>
              </div>
            </Tabs>
          </div>
          {/* image */}
          <div>
            <Image
              src={""}
              className="w-[505px] h-[505px] bg-no-repeat relative"
              alt="imagen coorporativa osc"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLine;
