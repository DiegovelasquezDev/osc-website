import React from "react";
import { MailIcon, HomeIcon, PhoneIcon } from "lucide-react";
import Form from "@/components/Form";

const ContactUs = () => {
  return (
    <section className="pt-12">
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hola 🫡
            </div>
            <h1 className="h1 max-w-md mb-8s">Vamos a trabajar juntos</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              laudantium corrupti dicta ipsam rerum ullam libero ea,
              repellendus, expedita facilis enim. Iure laudantium consectetur
              quae adipisci tenetur quaerat ratione sunt.
            </p>
          </div>
          {/* illustration */}
          <div className="hidden lg:flex w-full bg-contact_illustration_light bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb24 text-base xl:text-lg ">
            {/* contact */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>empresamail@correo.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Calle 1 sur # 45c - 199 | Medellin Colombia</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneIcon size={18} className="text-primary" />
              <div>+57 300 666 6264</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
