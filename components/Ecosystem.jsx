"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Ciberseguridad",
    img: "/Prueba.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla, nobis qui vel velit, dolorum eaque dolor deleniti at veritatis minus consequuntur similique debitis minima a id aliquid impedit aspernatur?",
  },
  {
    id: 2,
    title: "Tower & Analítica",
    img: "/Prueba.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla, nobis qui vel velit, dolorum eaque dolor deleniti at veritatis minus consequuntur similique debitis minima a id aliquid impedit aspernatur?",
  },
  {
    id: 3,
    title: "Mision critica",
    img: "/Prueba.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla, nobis qui vel velit, dolorum eaque dolor deleniti at veritatis minus consequuntur similique debitis minima a id aliquid impedit aspernatur?",
  },
  {
    id: 4,
    title: "Soluciones de visibilidad",
    img: "/Prueba.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla, nobis qui vel velit, dolorum eaque dolor deleniti at veritatis minus consequuntur similique debitis minima a id aliquid impedit aspernatur?",
  },
  {
    id: 5,
    title: "Soluciones IOT",
    img: "/Prueba.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla, nobis qui vel velit, dolorum eaque dolor deleniti at veritatis minus consequuntur similique debitis minima a id aliquid impedit aspernatur?",
  },
  {
    id: 6,
    title: "Redes",
    img: "/Prueba.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla, nobis qui vel velit, dolorum eaque dolor deleniti at veritatis minus consequuntur similique debitis minima a id aliquid impedit aspernatur?",
  },
  {
    id: 7,
    title: "Seguridad y acceso electronico",
    img: "/Prueba.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla, nobis qui vel velit, dolorum eaque dolor deleniti at veritatis minus consequuntur similique debitis minima a id aliquid impedit aspernatur?",
  },
  {
    id: 8,
    title: "Soluciones fintech y pantallas interactivas",
    img: "/Prueba.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla, nobis qui vel velit, dolorum eaque dolor deleniti at veritatis minus consequuntur similique debitis minima a id aliquid impedit aspernatur?",
  },
  {
    id: 9,
    title: "aliados integradores",
    img: "/Prueba.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla, nobis qui vel velit, dolorum eaque dolor deleniti at veritatis minus consequuntur similique debitis minima a id aliquid impedit aspernatur?",
  },
  {
    id: 10,
    title: "Advanced reseller",
    img: "/Prueba.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla, nobis qui vel velit, dolorum eaque dolor deleniti at veritatis minus consequuntur similique debitis minima a id aliquid impedit aspernatur?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section className="h-[70vh] py-3" ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="Logos de los aliados" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2 className="h1 font-bold">{item.title}</h2>
            <p className="text-muted-foreground">{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Ecosystem = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="ecosystem" ref={ref}>
      <div className="progress">
        <h2 className="h1 font-semibold">Ecosistema de aliados</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Ecosystem;
