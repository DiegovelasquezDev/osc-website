"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import StartCanvas from "@/components/startBackground";

const Template = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoaderComplete = async () => {
    await setIsLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleLoaderComplete();
    }, 2000); // Ajusta el tiempo según la duración de tu animación

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <StartCanvas />
      {isLoading ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        <motion.div
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
        >
          <Header />
          {children}
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Template;
