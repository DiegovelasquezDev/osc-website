import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const iconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(60, 53, 154, 1)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(235, 37, 102, 1)",
    },
  };

  return (
    <section className="w-[100vw] h-[100vh] overflow-hidden p-0 m-0 flex justify-center items-center">
      <div className="containerLoader">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="itemLoader"
        >
          <g
            transform="translate(0.000000,171.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <motion.path
              d="M685 1551 c-132 -48 -325 -162 -413 -244 -110 -105 -135 -186 -135
              -447 0 -318 39 -400 258 -542 205 -133 366 -190 477 -168 184 36 489 228 564
              355 40 70 56 170 56 355 0 263 -25 345 -141 453 -91 84 -304 206 -420 241 -71
              21 -182 19 -246 -3z m206 -97 c70 -21 231 -102 225 -113 -3 -5 -19 -11 -34
              -14 -47 -9 -230 -93 -348 -158 -170 -95 -225 -147 -269 -255 l-23 -55 -53 43
              c-94 77 -134 158 -115 233 21 82 273 257 456 316 69 23 93 23 161 3z m385
              -233 c86 -39 120 -164 111 -411 -7 -177 -22 -234 -80 -298 -38 -41 -216 -167
              -224 -158 -2 2 4 43 12 92 23 123 32 463 15 535 -16 67 -41 118 -80 163 -35
              39 -36 39 59 72 80 28 132 30 187 5z m-343 -133 c60 -42 92 -160 85 -309 -4
              -85 -6 -94 -31 -115 -61 -52 -162 -41 -292 32 -124 69 -138 83 -138 131 0 50
              39 121 88 160 19 16 76 51 126 79 96 55 112 57 162 22z m-632 -252 c68 -61
              270 -197 371 -250 102 -53 198 -73 272 -56 27 6 51 9 53 6 11 -10 -19 -141
              -42 -187 -45 -87 -119 -116 -217 -84 -129 42 -343 170 -416 249 -25 28 -47 64
              -57 98 -17 56 -33 268 -20 268 4 0 29 -20 56 -44z"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </g>
        </motion.svg>
      </div>
    </section>
  );
};

export default Loader;
