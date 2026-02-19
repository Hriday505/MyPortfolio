"use client";
import React, { useState } from "react";
import { Sun, Moon, HamIcon, MenuIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Menues = ["Home", "Projects", "Blogs", "Contact Me"];

export default function Nav({ isdark, setIsdark }) {
  const togglehandle = () => {
    setIsdark(!isdark);
  };

  const [isshow, setIshow] = useState(false);

  const checkissetshow = () => {
    setIshow(!isshow);
  };

  return (
    <div className="w-full z-50 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="p-5"
      >
        <div
          className={`w-[70%] h-[8.5vh]  rounded-[50px] sm:flex hidden shadow-2xs bg-black mx-auto  justify-between ${
            isdark ? "bg-black" : "bg-gray-400  "
          }`}
        >
          <div className="mt-2.5 ml-5">
            <h2 className="text-white text-[25px] font-mono">HridayDas</h2>
          </div>
          <div className="flex gap-10 mt-4 ">
            {Menues.map((item, index) => (
              <ul key={index} className="text-white font-mono">
                <li className="cursor-pointer">{item}</li>
              </ul>
            ))}
          </div>
          <div className="w-[15%] h-[6vh] m-2 flex justify-between mt-5 cursor-pointer">
            <div>
              <Sun size={25} className="text-white" />
            </div>
            <Toggler toggle={togglehandle} isdark={isdark}></Toggler>
            <div>
              <Moon size={25} className="text-white" />
            </div>
          </div>
          <div
            className={`mr-3 ${
              isdark ? "bg-gray-300" : "bg-gray-800"
            } rounded-[50px] h-[5.6vh] w-[12%]  mt-2.5`}
          >
            <p
              className={`${
                isdark ? "text-black" : "text-white"
              } text-[17px] text-center p-1.5  font-mono cursor-pointer`}
            >
              Know more
            </p>
          </div>
        </div>
      </motion.div>
      <div className="flex justify-between">
        <Toggler
          className="sm:hidden block"
          toggle={togglehandle}
          isdark={isdark}
        ></Toggler>
        <div>
          <MenuIcon
            size={45}
            onClick={checkissetshow}
            className="text-gray-600 sm:hidden block mr-5 -mt-3"
          ></MenuIcon>

          <AnimatePresence>
            {isshow && (
              <HamMenue
                isshow={isshow}
                checkissetshow={checkissetshow}
              ></HamMenue>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Toggler({ toggle, isdark, className }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className={`sm:w-[40%] sm:h-[4.2vh] w-[20%] h-[4.9vh] ${
        isdark ? "bg-gray-400" : "bg-gray-700"
      } rounded-[25px] flex  sm:-mt-0.5 -mt-4 sm:ml-0 ml-5  ${className}`}
    >
      <div
        onClick={toggle}
        className={`w-[38%] h-[3.6vh] rounded-[50%] bg-white   mx-auto sm:mt-0.5 mt-[4.5px] ${
          isdark ? "-translate-x-3 " : "translate-x-3"
        }`}
      ></div>
    </motion.div>
  );
}

function HamMenue({ isshow, checkissetshow }) {
  if (!isshow) return null; // Don't even render if not showing

  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0)", opacity: 1 }}
      exit={{ filter: "blur(10px)", opacity: 0 }} // Add this for smooth exit animation
      transition={{ duration: 1, delay: 0.4 }}
      className="fixed top-0  left-0 w-[90%] h-[68vh] m-5 sm:hidden block bg-gray-500 z-40 cursor-pointer"
    >
      <div>
        <img
          src="./img/cross.png"
          alt="img"
          className="w-[25px] h-[25px] m-3 float-right"
          onClick={checkissetshow}
        />
      </div>
      {Menues.map((item, index) => (
        <ul
          key={index}
          className="text-white text-center text-[25px] font-sans pt-16 "
        >
          <li className="cursor-pointer">{item}</li>
        </ul>
      ))}
    </motion.div>
  );
}
