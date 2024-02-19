import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";

const BusinessLine = () => {
  return (
    <section className="h-[100vh] pb-12 xl:py-12 mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Lineas de negocio
          <span className="absolute inset-x-0 top-12 bottom-0 h-2 bg-gradient-to-r from-[#3A349A] to-[#EB2566] rounded-full"></span>
        </h2>
        <div className="flex flex-col items-center">
          <Tabs defaultValue="telecoms">
            {/* TABS */}
            <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-[820px]">
              <TabsTrigger
                value="telecoms"
                className="data-[state=active]:bg-[#3a349a]"
              >
                Telecoms services
              </TabsTrigger>
              <TabsTrigger
                value="smartsolutions"
                className="data-[state=active]:bg-[#61308E]"
              >
                Smart Solutions
              </TabsTrigger>
              <TabsTrigger
                value="bpo"
                className="data-[state=active]:bg-[#9D2B7C]"
              >
                BPO
              </TabsTrigger>
              <TabsTrigger
                value="workforce"
                className="data-[state=active]:bg-[#eb2566]"
              >
                WorkForce Managment
              </TabsTrigger>
            </TabsList>
            {/* CONTENT */}
            <div className="text-lg mt-12 xl:mt-8">
              <TabsContent value="telecoms">
                <div className="text-center flex flex-col items-center">
                  <div>Imagen</div>
                  <h3 className="h2 mb-4">Telecoms services</h3>
                  <p className="subtitle max-w-sm mx-auto xl:mx-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eveniet pariatur excepturi ipsum temporibus expedita!
                    Voluptate dolorem, cupiditate, fuga molestiae nihil odit
                    nemo, labore sunt dignissimos delectus dolore. Amet, ipsam
                    consequuntur?
                  </p>
                  <Button className="bg-[#3a349a]">Conoce más</Button>
                </div>
              </TabsContent>
              <TabsContent value="smartsolutions">
                <div className="text-center flex flex-col items-center">
                  <div>Imagen</div>
                  <h3 className="h2 mb-4">Smart Solutions</h3>
                  <p className="subtitle max-w-sm mx-auto xl:mx-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eveniet pariatur excepturi ipsum temporibus expedita!
                    Voluptate dolorem, cupiditate, fuga molestiae nihil odit
                    nemo, labore sunt dignissimos delectus dolore. Amet, ipsam
                    consequuntur?
                  </p>
                  <Button className="bg-[#61308E]">Conoce más</Button>
                </div>
              </TabsContent>
              <TabsContent value="bpo">
                <div className="text-center flex flex-col items-center">
                  <div>Imagen</div>
                  <h3 className="h2 mb-4">BPO</h3>
                  <p className="subtitle max-w-sm mx-auto xl:mx-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eveniet pariatur excepturi ipsum temporibus expedita!
                    Voluptate dolorem, cupiditate, fuga molestiae nihil odit
                    nemo, labore sunt dignissimos delectus dolore. Amet, ipsam
                    consequuntur?
                  </p>
                  <Button className="bg-[#9D2B7C]">Conoce más</Button>
                </div>
              </TabsContent>
              <TabsContent value="workforce">
                <div className="text-center flex flex-col items-center">
                  <div>Imagen</div>
                  <h3 className="h2 mb-4">Workforce Managment</h3>
                  <p className="subtitle max-w-sm mx-auto xl:mx-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eveniet pariatur excepturi ipsum temporibus expedita!
                    Voluptate dolorem, cupiditate, fuga molestiae nihil odit
                    nemo, labore sunt dignissimos delectus dolore. Amet, ipsam
                    consequuntur?
                  </p>
                  <Button className="bg-[#eb2566]">Conoce más</Button>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default BusinessLine;
