"use client";
import React from "react";

// Components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-4 bg-transparent">
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
