"use client";
import React, { useState,useEffect, useRef  } from "react";
import { Sun, Moon, MenuIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import Link from "next/link";

const Menues = [
  { id:1, name: "Home", link: "/" },
  {id:2, name: "Projects", link: "/project" },
  { id:3, name: "Blogs", link: "/blogs" },
  { id:4, name: "Contact Me", link: "/contact" },
];

export default function Nav({ isdark, setIsdark }) {
  const togglehandle = () => {
    setIsdark(!isdark);
  };

  const [isshow, setIshow] = useState(false);
  const menuRef = useRef(null);

  const checkissetshow = () => {
    
    setIshow(!isshow);
  };

 useEffect(() => {
  const menuElement = menuRef.current;

  if (isshow && menuElement) {
    disableBodyScroll(menuElement);
  }

  if (!isshow && menuElement) {
    enableBodyScroll(menuElement);
  }

  return () => {
    clearAllBodyScrollLocks();
  };
}, [isshow]);


  return (
    <div className="absolute left-0 top-0 z-50 w-full bg-transparent">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="bg-transparent p-5"
      >
        <div
          className={`mx-auto hidden  md:h-[80px]  lg:h-[8.5vh] lg:w-[70%] justify-between rounded-[50px] border shadow-2xs backdrop-blur-md sm:flex ${
            isdark
              ? "border-white/10 bg-black/35"
              : "border-black/10 bg-white/70"
          }`}
        >
          <div className="ml-5 mt-4">
            <h2
              className={`text-[20px] font-mono lg:block md:hidden ${
                isdark ? "text-white" : "text-black"
              }`}
            >
              DevHriday
            </h2>
          </div>

          <div className="mt-4 flex gap-10">
            
            {Menues.map((item, index) => (
              <Link
                key={index} href={item.link}
                className={`font-mono ${
                  isdark ? "text-white" : "text-black"
                }`}
              >
                <li className="cursor-pointer  lg:text-[14px] md:leading-2 lg:leading-1.2 xl:mt-2.5  md:text-[1.1rem] md:mt-[1.2rem] list-none mt-1">{item.name}</li>
              </Link>
            ))}
          </div>

          <div className="m-2 mt-5 flex md:h-[8vh]  md:w-[32%] lg:h-[6vh] lg:w-[15%] cursor-pointer justify-between">
            <div>
             <Moon
                size={25}
                className={`${isdark ? "text-white" : "text-black"} lg:block md:hidden`}
              />
            </div>

            <Toggler toggle={togglehandle} isdark={isdark} />

            <div>
                <Sun
                size={25}
                className={`${isdark ? "text-white" : "text-black"} lg:block md:hidden`}

              />
             
            </div>
          </div>
            
          <div
            className={`mr-3 mt-2.5 h-[5.6vh] w-[12%] md:hidden lg:block rounded-[50px] ${
              isdark ? "bg-gray-300" : "bg-gray-800"
            }`}
          >
             
            <p
              className={`cursor-pointer p-1.5  mt-[5px]  text-center text-[14px] font-mono ${
                isdark ? "text-black" : "text-white"
              }`}
            >
              <a href="./about">Know more</a> 
            </p>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-between px-5">
        <Toggler
          className="block sm:hidden"
          toggle={togglehandle}
          isdark={isdark}
        />

        <div>
          <MenuIcon
            size={45}
            onClick={checkissetshow}
            className={`-mt-3 mr-5 block sm:hidden ${
              isdark ? "text-white" : "text-black"
            }`}
          />

          <AnimatePresence>
            {isshow && (
              <HamMenue
                isshow={isshow}
                checkissetshow={checkissetshow}
                isdark={isdark}
                menuRef={menuRef}

              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Toggler({ toggle, isdark, className = "" }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      onClick={toggle}
      className={`
        relative flex h-7 w-14 -mt-2 lg:top-1.5 md:top-3.5 items-center rounded-full p-1
        transition-colors duration-300
        ${isdark ? "bg-gray-400" : "bg-gray-700"}
        ${className}
      `}
    >
      <div
        className={`
          h-5 w-5 rounded-full bg-white shadow-md
          transition-transform duration-300
          ${isdark ? "translate-x-0" : "translate-x-7"}
        `}
      />
    </motion.button>
  );
}

function HamMenue({ isshow, checkissetshow, isdark,menuRef }) {
  if (!isshow) return null;

  return (
      <motion.div
      ref={menuRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[999] bg-black/40 sm:hidden"
      onClick={checkissetshow}
    >

    <motion.div
      ref={menuRef}
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0)", opacity: 1 }}
      exit={{ filter: "blur(10px)", opacity: 0 }}
      transition={{ duration: 0.5 }}

      className={`fixed left-0 top-0 z-40 m-5 block rounded-2xl h-[68vh] w-[90%] cursor-pointer sm:hidden ${
        isdark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="w-10 h-10 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-full float-right m-4">
        <img
          src="./img/cross.png"
          alt="close"
          className="float-right m-3  h-[15px] w-[15px]"
          onClick={checkissetshow}
        />
      </div>

      {Menues.map((item, index) => (
        <Link
           key={index} href={item.link}
             onClick={checkissetshow}
          className={`pt-16 text-center text-[25px] font-sans ${
            isdark ? "text-white" : "text-black"
          }`}
        >
          <li className="cursor-pointer list-none  text-left p-6  text-[1.5rem]">{item.name}</li>
        </Link>
      ))}
    </motion.div>
    </motion.div>
  );
}