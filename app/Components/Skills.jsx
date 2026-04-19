import React, { useRef } from "react";
import { FloatingDock } from "../Components/ui/floating-dock";
import { motion } from "framer-motion";

 import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiRedux,  
  SiGreensock,
  SiFramer,
  SiNodedotjs,
  SiMysql,
  SiLaravel,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiPhp,
  SiPython
 } from "react-icons/si";
import { div } from "framer-motion/client";
export function Skills({isdark = true}) {

  const headingRef = useRef(null)


  const links = [
    {
      title: "HTML5",
      icon: (
        < SiHtml5 className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "CSS3",
      icon: (
        < SiCss3 className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
   {
      title: "JavaScript",
      icon: (
        < SiJavascript className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },

     {
      title: "React",
      icon: (
        < SiReact className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
        {
      title: "Bootstrap",
      icon: (
        < SiBootstrap className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
         {
      title: "Tailwind CSS",
      icon: (
        < SiTailwindcss className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
      
           {
      title: "Typescript",
      icon: (
        < SiTypescript className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "nextjs",
      icon: (
        <  SiNextdotjs className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
        {
      title: "vuejs",
      icon: (
        < SiVuedotjs className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
            {
      title: "Redux",
      icon: (
        < SiRedux className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
            {
      title: "Gsap",
      icon: (
        < SiGreensock className="h-full w-full text-white dark:text-neutral-300" />
      ),
      
      href: "#",
    },
          {
      title: "Freamer Motion",
      icon: (
        < SiFramer className="h-full w-full text-white dark:text-neutral-300" />
      ),
      
      href: "#",
    },
          {
      title: "nodejs",
      icon: (
        < SiNodedotjs className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
            {
      title: "mysql",
      icon: (
        < SiMysql className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
      {
      title: "Python",
      icon: (
        <SiPython className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
       {
      title: "PHP",
      icon: (
        <SiPhp className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
             {
      title: "Laravel",
      icon: (
        < SiLaravel className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
             {
      title: "Postman",
      icon: (
        < SiPostman className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
             {
      title: "Linux",
      icon: (
        < SiLinux className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },

 
    {
      title: "GitHub",
      icon: (
        <SiGithub className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (

    <div className={`w-full ${isdark ? "bg-black" : "bg-white"}`}>
       <motion.h2 ref={headingRef}  initial={{ opacity: 0}} whileInView={{opacity:1}}  viewport={{ once: false, amount: 0.6 }}  transition={{ duration: 1.5, ease: "easeIn", delay: 0.6 }}  className={`text-center ${isdark ? "text-white" : "text-black"} lg:text-[3.5rem]  text-[2rem] font-bold p-3`}>Skill's</motion.h2>
      <div className="flex items-center items-center pb-4 justify-center lg:h-[12rem] h-[10rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20  -mt-16  " // only for demo, remove for production
        items={links}
      />
    </div>

    </div>

  );
}