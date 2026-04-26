"use client";
import { useInView, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Terminal from "../../components/ui/terminal-demo";

export default function Aboutme({ isdark = true }) {
  return (
    <section
      className={`w-full ${
        isdark ? "bg-black" : "bg-white"
      } grid grid-cols-1 lg:grid-cols-12 min-h-screen lg:h-screen`}
    >
      <Leftside />
      <Rightside isdark={isdark} />
    </section>
  );
}

function Leftside() {
  return (
    <div className="order-2 hidden lg:order-1 lg:col-span-6 lg:flex lg:items-center lg:justify-center lg:px-6 xl:px-10">
      <div className="w-full max-w-3xl">
        <Terminal />
      </div>
    </div>
  );
}

function Rightside({ isdark = true }) {
  const ref = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  const isButtonView = useInView(buttonRef, { once: true });
  const isView = useInView(ref, { once: true, amount: 0.3 });

  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!isView) return;

    const projectInterval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 15) {
          clearInterval(projectInterval);
          return 15;
        }
        return prev + 1;
      });
    }, 10);

    const experienceInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 2.6) {
          clearInterval(experienceInterval);
          return 2.6;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(projectInterval);
      clearInterval(experienceInterval);
    };
  }, [isView]);

  return (
    <div
      ref={ref}
      className="order-1 col-span-1 flex items-center px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:order-2 lg:col-span-6 lg:px-10 xl:px-14"
    >
      <div className="w-full max-w-2xl">
        <motion.h2
          ref={headingRef}
          className={`${
            isdark ? "text-white" : "text-black"
          } text-left text-[2rem] font-bold sm:text-[2.4rem] md:text-[2.8rem] lg:text-[75px]`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
        >
          About me
        </motion.h2>

        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0 }}
          exit={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
          className={`${
            isdark ? "text-white" : "text-black"
          } mt-4 text-left text-sm leading-7 sm:text-base sm:leading-8 md:text-[1.9rem] md:leading-12 lg:text-[17px] lg:leading-7 text-balance`}
        >
          I’m a detail-oriented full-stack web developer with 2.6+ years of experience building responsive websites, admin dashboards, CRUD systems, APIs, and business-focused web applications.

         My main strength is turning ideas into clean, usable digital products. I enjoy working on both frontend interfaces and backend logic, especially with React, Next.js, Laravel, MySQL, Tailwind CSS, and REST APIs.

         I care about clean code, smooth user experience, responsive design, and building features that solve real business problems.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:flex lg:w-[70%] lg:items-start lg:justify-between lg:gap-16">
          <div
            className={`${
              isdark ? "text-white" : "text-black"
            } text-center sm:text-left`}
          >
            <h3 className="text-[2rem] font-bold sm:text-[2.4rem] lg:text-[35px]">
              {count}+
            </h3>
            <p className="mt-2 text-sm sm:text-lg md:text-xl lg:text-[28px] whitespace-nowrap">
              Finished Porjects
            </p>
          </div>

          <div
            className={`${
              isdark ? "text-white" : "text-black"
            } text-center sm:text-left`}
          >
            <h3 className="text-[2rem] font-bold sm:text-[2.4rem] lg:text-[35px]">
              {counter}+
            </h3>
            <p className="mt-2 text-sm sm:text-lg md:text-xl lg:text-[28px] whitespace-nowrap">
              Development Skills
            </p>
          </div>
        </div>

        <motion.button
          ref={buttonRef}
          initial={{ scale: 0 }}
          animate={isButtonView ? { scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="mt-8 inline-flex h-11 w-full max-w-[150px] items-center justify-center rounded-full bg-gray-300 px-6 text-sm font-medium text-black cursor-pointer sm:h-12 sm:text-base lg:mt-6 lg:h-[6vh] lg:w-[23%]  relative ml-22 md:ml-0   lg:max-w-none lg:text-[18px]"
        >
         <a href="./about">About Me</a> 
        </motion.button>
      </div>
    </div>
  );
}