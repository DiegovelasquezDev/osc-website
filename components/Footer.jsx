"use client";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-white">
            &copy; 2024 OSC TOP GROUP SOLUTIONS. Todos los derechos reservados
          </p>
          <p className="text-slate-300 space-x-2">
            <Link href="#" className="hover:cursor-pointer">
              Terminos de servicios
            </Link>
            <Link href="#" className="hover:cursor-pointer">
              Política de privacidad
            </Link>
          </p>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <Link
            href="https://www.facebook.com/OSCTopsolutionsgroup"
            target="_blank"
            className="hover:cursor-pointer"
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://www.instagram.com/osctopsolutionsgroup/"
            target="_blank"
            className="hover:cursor-pointer"
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/company/osc-telecoms/"
            target="_blank"
            className="hover:cursor-pointer"
          >
            <LinkedinIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
