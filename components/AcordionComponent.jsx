"use client";
import React, { useState } from "react";

const AcordionComponent = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <h2>
        <button
          type="button"
          className={`accordion-button ${
            isActive ? "active" : ""
          } flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700 ${
            isActive ? "border-b-0" : ""
          } text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl`}
          onClick={toggleAccordion}
        >
          {title}
          <svg
            className={`w-6 h-6 shrink-0 ${isActive ? "rotate-180" : ""}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        className={`accordion-content p-5 border border-gray-200 dark:border-gray-700 ${
          isActive ? "border-b-0" : "hidden"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default AcordionComponent;
