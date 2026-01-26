"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);

  const letter = "WELCOME";
  const word = {
    fontFamily: "Neue Montreal",
  };

  return (
    <>
      {loading ? (
        <div className="w-full h-screen   bg-black fixed flex justify-center items-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
            className="text-white text-[32px]  sm:text-[68px] text-center  flex"
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
      ) : (
        children
      )}
    </>
  );
};

export default Preloader;
