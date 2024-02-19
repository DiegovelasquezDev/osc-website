"use client";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary py-6 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; 2024 OSC TOP GROUP SOLUTIONS. Todos los derechos reservados
          </p>
          <p className="text-slate-300 space-x-2 text-sm">
            <Link href="#" className="hover:cursor-pointer">
              Terminos de servicios
            </Link>
            <Link href="#" className="hover:cursor-pointer">
              Política de privacidad
            </Link>
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0 md:mr-4">
          <Link
            href="https://www.facebook.com/OSCTopsolutionsgroup"
            target="_blank"
            className="hover:cursor-pointer w-6 h-6"
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://www.instagram.com/osctopsolutionsgroup/"
            target="_blank"
            className="hover:cursor-pointer w-6 h-6"
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/company/osc-telecoms/"
            target="_blank"
            className="hover:cursor-pointer w-6 h-6"
          >
            <LinkedinIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
