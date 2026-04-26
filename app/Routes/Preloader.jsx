"use client";
import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const letter = "Loading...";
  const word = {
    fontFamily: "archivo",
  };

  return (
    <div className="fixed inset-0 z-[999] flex h-screen w-full items-center justify-center bg-black">
      <motion.h2
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="flex text-center text-[32px] text-white sm:text-[68px]"
      >
        {letter.split("").map((char, index) => (
          <motion.span
            style={word}
            key={index}
            className="inline-block overflow-x-hidden
            text-center"
            variants={{
              hidden: { opacity: 1, y: 0 },
              visible: { opacity: 0, y: -100 },
            }}
            transition={{
              duration: 0.8,

              ease: "easeInOut",
              repeat: 2,
              repeatType: "reverse",
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default Preloader;
