"use client";
import React, { useState, useEffect } from "react";

// Components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);

  return (
    <header
      className={`${
        header ? "py-4 bg-background shadow-md" : "py-6 dark:bg-background"
      } sticky top-0 z-30 transition-all ${
        pathname === "/" && "bg-background"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* navbar */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:bg-gradient-to-r hover:from-[#3A349A] hover:to-[#EB2566] hover:text-transparent bg-clip-text transition-all"
              underlineStyles="absolute left-0 top-full h-[2px]  bg-gradient-to-r from-[#3A349A] to-[#EB2566] w-full"
            />
            <ThemeToggler />

            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
