import React from "react";
import { delay, motion } from "framer-motion";

const HeadeLine = ["FullstacK", "Developer"];

const Hero = ({ isdark }) => {
  return (
    <div className="w-full h-[75vh]  sm:h-[100vh]  grid grid-cols-8 ">
      <div className="col-span-4 ml-9 mt-15  sm:ml-18 w-fit sm:mt-8">
        {HeadeLine.map((item, i) => (
          <motion.h3
            initial={{ filter: "blur(10px)", opacity: 0, y: 100 }}
            animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            key={i}
            className={`leading-20 sm:leading-42 text-[60px]  sm:text-[155px] font-bold font-sans ${
              isdark ? "text-black" : "text-white"
            }`}
          >
            {item}
          </motion.h3>
        ))}

        <motion.h1
          initial={{ filter: "blur(10px)", opacity: 0, y: 100 }}
          animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={`sm:text-[60px] text-[35px] sm:-mt-4 mt-1 font-sans ${
            isdark ? "text-black" : "text-white"
          }`}
        >
          Hriday Das
        </motion.h1>
      </div>
      <div className="sm:col-span-4 col-span-9">
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className={`sm:text-[20px] text-[15px] w-[82%]  mt-[-1rem] sm:mt-[25rem] ml-10 sm:ml-22 font-sans ${
            isdark ? "text-black" : "text-white"
          }`}
        >
          Hello I am a Frontend developer based in Kolkata, India focused on
          creating interactive digital experiences on the web, working with
          brands and industry leaders such as Google Fonts, Paystack, Heva
          Health, Disney, Jelly, and Null amongst others to achieve this.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
