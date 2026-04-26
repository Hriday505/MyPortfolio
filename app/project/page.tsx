"use client"
import { HoverEffect } from "../Components/ui/card-hover-effect";
 import Nav from "../Components/Nav";
 import Footer from "../Components/Footer";
 import { useState } from "react";
export default function CardHoverEffectDemo() {

const [isDark, setIsDark] = useState(true);


  return (
    <>
    <div className={`w-full  h-[150vh] ${isDark ? 'bg-[#0c0d0d]' : 'bg-gray-100'}`}>

  <div className="sticky top-0 z-50">
    <Nav isdark={isDark} setIsdark={setIsDark} />
  </div>

     <div className={`max-w-5xl mx-auto py-16 px-8 ${isDark ? 'bg-[#0c0d0d]' : 'bg-gray-100'}`} >
      <HoverEffect isdark={isDark } items={projects}  />
    </div>
    <Footer  isdark={isDark }  ></Footer>
    </div>
 
    </>

  );
}
export const projects = [
  {
    title: "drabirdaspsychiatrist.in",
    description:
      "A professional website for a Kolkata-based psychiatrist, designed to present services, doctor information, patient guidance, and contact options in a clean and trustworthy way. The site focuses on responsive design, smooth user experience, and easy appointment enquiry flow.",
    link: "https://www.drabirdaspsychiatrist.in/",
    stack: "Next.js, Tailwind CSS, CSS, Framer Motion, Email.js",
  },
  {
    title: "roseatehotels.com",
    description:
      "A luxury hotel chain website built to showcase premium properties, rooms, dining, offers, and booking-related information. The project focuses on elegant UI, smooth animations, responsive layouts, and a high-quality browsing experience for hotel visitors.",
    link: "https://www.roseatehotels.com",
    stack: "React, Tailwind CSS, GSAP, Node.js, MySQL, REST API",
  },
  {
    title: "dubai-realty.com",
    description:
      "A real estate website designed to present property listings, location details, investment information, and project highlights in a modern and visually appealing way. The interface focuses on clean design, smooth sections, and easy navigation for property buyers and investors.",
    link: "https://dubai-realty.com/en",
    stack: "React, Tailwind CSS, shadcn/ui, GSAP",
  },
  {
    title: "saffronmumbai.in",
    description:
      "A restaurant website created to showcase menu details, restaurant ambience, booking options, and customer information in a simple and attractive layout. The project focuses on responsive design, clear content presentation, and a smooth experience for users looking to explore or reserve a table.",
    link: "https://www.saffronmumbai.in",
    stack: "Next.js, Tailwind CSS, MySQL, REST API",
  },
];