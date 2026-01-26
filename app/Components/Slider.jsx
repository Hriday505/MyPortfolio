import React from "react";
import { motion } from "framer-motion";

const Slides = [
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Vue.js",
  "Laravel",
  "Node.js",
  "MYSQL",
  "Redux",
  "Git",
  "Github",
];

export default function Slider({ isdark }) {
  return (
    <div
      className={`w-[100%] sm:h-[20vh] h-[10vh] bg-amber-50 flex justify-between gap-32 ${
        isdark ? "bg-black" : "bg-white"
      } `}
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-20%" }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        className={`text-gray-600 flex  m-auto sm:text-[38px]  text-[22px] ${
          isdark ? "text-white" : "text-gray-700"
        }`}
        style={{
          display: "flex",
          gap: "65px",
          justifyContent: "space-between",
          overflow: "hidden",
          flexShrink: 0,
          whiteSpace: "nowrap",
          width: "150%",
        }}
      >
        {Slides.map((slide, i) => (
          <div key={i}>{slide}</div>
        ))}
      </motion.div>
    </div>
  );
}
