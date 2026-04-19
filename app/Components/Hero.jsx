"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundRipple } from "@/components/ui/background-ripple";

const HeadeLine = ["FullstacK", "Developer"];

const Hero = ({ isdark = true }) => {
  return (
    <BackgroundRipple className="w-full" isdark={isdark}>
      <div className="grid h-[85vh] w-full grid-cols-8 lg:h-[100vh]">
        <div className="col-span-8 ml-9 mt-15 w-fit lg:col-span-4 sm:ml-18 lg:mt-8 md:pt-12">
          {HeadeLine.map((item, i) => (
            <motion.h3
              key={i}
              initial={{ filter: "blur(10px)", opacity: 0, y: 100 }}
              animate={{ filter: "blur(0)", opacity: 1, y: 60 }}
              transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
              className={`text-[60px] leading-20 font-bold font-sans md:text-[8rem] lg:text-[155px] sm:leading-42 ${
                isdark ? "text-white" : "text-black"
              }`}
            >
              {item}
            </motion.h3>
          ))}

          <motion.h1
            initial={{ filter: "blur(10px)", opacity: 0, y: 100 }}
            animate={{ filter: "blur(0)", opacity: 1, y: 80 }}
            transition={{ duration: 1, delay: 0.7 }}
            className={`mt-1 text-[35px] font-sans sm:-mt-4 sm:text-[60px] ${
              isdark ? "text-white" : "text-black"
            }`}
          >
            Hriday Das
          </motion.h1>
        </div>

        <div className="col-span-8 sm:col-span-4">
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className={`ml-10 mt-2 w-[82%] text-[15px] md:text-[1.5rem] md:w-[600px] font-sans sm:ml-22 lg:mt-[30rem] lg:text-[20px] ${
              isdark ? "text-white" : "text-black"
            }`}
          >
            Hello I am a Frontend developer based in Kolkata, India focused on
            creating interactive digital experiences on the web, working with
            brands and industry leaders such as Google Fonts, Paystack, Heva
            Health, Disney, Jelly, and Null amongst others to achieve this.
          </motion.p>
        </div>
      </div>
    </BackgroundRipple>
  );
};

export default Hero;