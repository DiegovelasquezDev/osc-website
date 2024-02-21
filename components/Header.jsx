"use client";
import React from "react";
import { motion } from "framer-motion";

// Components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.2,
            duration: 0.3,
          },
        },
      }}
      className="py-4 bg-transparent"
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
    </motion.header>
  );
};

export default Header;
