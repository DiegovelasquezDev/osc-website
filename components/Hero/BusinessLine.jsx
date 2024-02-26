import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";

const BusinessLine = () => {
  return (
    <section className="">
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
                <div className="w-full">
                  <div className="container flex flex-col items-center justify-center max-w-3xl px-4 py-12 md:flex-row md:gap-4 md:py-16 lg:gap-6 lg:max-w-5xl xl:py-24">
                    <div className="order-1 grid gap-4 text-center md:order-0 md:gap-8 md:text-left">
                      <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                          Telecoms services
                        </h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                          Tools and content to help your sales team close more
                          deals.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Overview
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Analytics
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Content
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Training
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="order-0 w-full max-w-md">
                      <img
                        alt="Image"
                        className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                        height="300"
                        src="/servicio-1.jpg"
                        width="500"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="smartsolutions">
                <div className="w-full">
                  <div className="container flex flex-col items-center justify-center max-w-3xl px-4 py-12 md:flex-row md:gap-4 md:py-16 lg:gap-6 lg:max-w-5xl xl:py-24">
                    <div className="order-1 grid gap-4 text-center md:order-0 md:gap-8 md:text-left">
                      <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                          Smart solutions
                        </h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                          Tools and content to help your sales team close more
                          deals.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Overview
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Analytics
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Content
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Training
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="order-0 w-full max-w-md">
                      <img
                        alt="Image"
                        className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                        height="300"
                        src="/servicio-1.jpg"
                        width="500"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="bpo">
                <div className="w-full">
                  <div className="container flex flex-col items-center justify-center max-w-3xl px-4 py-12 md:flex-row md:gap-4 md:py-16 lg:gap-6 lg:max-w-5xl xl:py-24">
                    <div className="order-1 grid gap-4 text-center md:order-0 md:gap-8 md:text-left">
                      <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                          BPO
                        </h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                          Tools and content to help your sales team close more
                          deals.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Overview
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Analytics
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Content
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Training
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="order-0 w-full max-w-md">
                      <img
                        alt="Image"
                        className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                        height="300"
                        src="/servicio-1.jpg"
                        width="500"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="workforce">
                <div className="w-full">
                  <div className="container flex flex-col items-center justify-center max-w-3xl px-4 py-12 md:flex-row md:gap-4 md:py-16 lg:gap-6 lg:max-w-5xl xl:py-24">
                    <div className="order-1 grid gap-4 text-center md:order-0 md:gap-8 md:text-left">
                      <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                          WorkForce Managment
                        </h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                          Tools and content to help your sales team close more
                          deals.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Overview
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Analytics
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Content
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-200" />
                          <h3 className="font-medium tracking-tight">
                            Training
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="order-0 w-full max-w-md">
                      <img
                        alt="Image"
                        className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                        height="300"
                        src="/servicio-1.jpg"
                        width="500"
                      />
                    </div>
                  </div>
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
