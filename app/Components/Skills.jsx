import React from "react";
import { FloatingDock } from "../Components/ui/floating-dock";

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
export function Skills() {
  const links = [
    {
      title: "HTML5",
      icon: (
        < SiHtml5 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "CSS3",
      icon: (
        < SiCss3 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
   {
      title: "JavaScript",
      icon: (
        < SiJavascript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

     {
      title: "React",
      icon: (
        < SiReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
        {
      title: "Bootstrap",
      icon: (
        < SiBootstrap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
         {
      title: "Tailwind CSS",
      icon: (
        < SiTailwindcss className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
        {
      title: "Aceternity UI",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
           {
      title: "Typescript",
      icon: (
        < SiTypescript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "nextjs",
      icon: (
        <  SiNextdotjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
        {
      title: "vuejs",
      icon: (
        < SiVuedotjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
            {
      title: "Redux",
      icon: (
        < SiRedux className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
            {
      title: "Gsap",
      icon: (
        < SiGreensock className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      
      href: "#",
    },
          {
      title: "Freamer Motion",
      icon: (
        < SiFramer className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      
      href: "#",
    },
          {
      title: "nodejs",
      icon: (
        < SiNodedotjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
            {
      title: "mysql",
      icon: (
        < SiMysql className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
      {
      title: "Python",
      icon: (
        <SiPython className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
       {
      title: "PHP",
      icon: (
        <SiPhp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
             {
      title: "Laravel",
      icon: (
        < SiLaravel className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
             {
      title: "Postman",
      icon: (
        < SiPostman className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
             {
      title: "Linux",
      icon: (
        < SiLinux className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

 
    {
      title: "GitHub",
      icon: (
        <SiGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[14rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}