"user strict";
import { useInView, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function Aboutme({ isdark }) {
  return (
    <div
      className={`sm:w-[100%] h-[94vh]   sm:h-[65vh] sm:grid sm:grid-cols-12  z-0${
        isdark ? "bg-white" : "bg-black"
      }`}
    >
      <Leftside></Leftside>

      <Rightside></Rightside>
    </div>
  );
}

function Leftside() {
  const imgref = useRef(null);
  const isimgview = useInView(imgref, { once: false });

  return (
    <div className="col-span-6 mt-30 ml-32 sm:block hidden">
      <motion.img
        ref={imgref}
        initial={{ opacity: 0, y: 0 }}
        animate={isimgview ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ delay: 0.4, duration: 1 }}
        src="/img/laptop.png"
        alt=""
        className="w-[100%] h-[60vh]"
      />
    </div>
  );
}

function Rightside() {
  const ref = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  const isButtinview = useInView(buttonRef, { once: true });
  const isview = useInView(ref, { once: true });

  const isAboutview = useInView(headingRef, { once: true });

  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval;

    if (isview) {
      interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= 310) {
            clearInterval(interval);
            return prev;
          }

          return prev + 1;
        });
      }, 10);

      interval = setInterval(() => {
        setCounter((prev) => {
          if (prev >= 5) {
            clearInterval(interval);
            return prev;
          }

          return prev + 1;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isview]);

  return (
    <div className="col-span-6 p-10" ref={ref}>
      <motion.h2
        ref={headingRef}
        className="text-white sm:text-lg sm:text-left  ml-2 sm:ml-0  text-[35px] font-bold text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }} // amount = how much must be visible to trigger
        transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
      >
        About me
      </motion.h2>
      <motion.p
        ref={headingRef}
        initial={{ filter: "blur(10px)", opacity: 0 }}
        exit={{ filter: "blur(10px)", opacity: 0 }}
        whileInView={{ filter: "blur(0)", opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }} // amount = how much must be visible to trigger
        transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
        className="text-white text-xs p-2 sm:text-left text-left mx-auto -ml-0 sm:-ml-1.5  text-balance "
      >
        I'm a passionate and detail-oriented software developer with a strong
        focus on building efficient, user-friendly applications. I enjoy solving
        complex problems through clean, scalable code and continuously learning
        new technologies to stay ahead in this fast-paced industry. Whether it's
        frontend interfaces or backend logic, I take pride in delivering
        reliable solutions that make a difference.
      </motion.p>

      <div className="sm:flex block mt-8  sm:justify-between sm:w-[70%] w-full -ml-1 sm:ml-1 justify-center p-8 sm:p-0 sm:gap-20 gap-18 ">
        <div className="text-white text-center sm:text-left">
          <h3 className="text-[35px] font-bold">{count}+</h3>
          <p className="text-xs sm:text-[28px] sm:mt-0  mt-2 whitespace-nowrap">
            Project Complete
          </p>
        </div>
        <div className="text-white text-center sm:text-left sm:mt-0 mt-8">
          <h3 className="text-[35px] font-bold">{counter}+</h3>
          <p className="text-xs sm:text-[28px] sm:mt-0  mt-2 whitespace-nowrap">
            Years Experiance
          </p>
        </div>
      </div>

      <motion.button
        ref={buttonRef}
        initial={{ scale: 0 }}
        animate={isButtinview ? { scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="text-black sm:text-[18px] cursor-pointer   bg-gray-300 sm:w-[23%] h-[5vh] sm:h-[6vh] sm:m-6 mt-1 sm:ml-1 w-[50%] p-0  ml-17 rounded-4xl "
      >
        Why Hire Me
      </motion.button>
    </div>
  );
}
