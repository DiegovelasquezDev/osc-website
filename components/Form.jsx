"use client";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessagesSquare } from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* inputs */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Ingrese su usuario" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* inputs */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Ingrese su email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* inputs */}
      <div className="relative flex items-center">
        <Textarea
          type="name"
          id="name"
          placeholder="Cuentanos acerca de tu idea ... "
        />
        <MessagesSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Vamos a hablar
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
