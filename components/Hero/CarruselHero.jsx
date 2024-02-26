"use client";
import React, { useState, useEffect, useRef } from "react";

const CarruselHero = () => {
  const [itemActive, setItemActive] = useState(0);
  const refreshIntervalRef = useRef(null);
  const items = [
    {
      src: "/Hero/slider-1.jpg",
    },
    {
      src: "/Hero/slider-2.png",
    },
    {
      src: "/Hero/slider-3.png",
    },
  ];

  useEffect(() => {
    refreshIntervalRef.current = setInterval(() => {
      setItemActive((prevItem) => (prevItem + 1) % items.length);
    }, 5000);

    return () => clearInterval(refreshIntervalRef.current);
  }, [items.length]);

  const showSlider = (index) => {
    setItemActive(index);
    clearInterval(refreshInterval);
  };

  return (
    <section className="slider">
      <div className="list">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === itemActive ? "active" : ""}`}
          >
            <img src={item.src} alt={`Slider ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === itemActive ? "active" : ""}`}
            onClick={() => showSlider(index)}
          >
            <img src={item.src} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarruselHero;
