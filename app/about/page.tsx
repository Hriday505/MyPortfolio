"use client"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import {motion} from 'framer-motion' 
import { useState } from "react"
import Scroller from '../../components/ui/sticky-scroll-reveal-demo'
import  FrontendProgress from '../../components/ui/frontend-card'
import BackendProgress from '../../components/ui/backend-card'
import Communication from '../../components/ui/communication'

 // About page with theme toggle, intro copy, expertise section, and skill highlights.
 export default function  About(){
    const [isDark, setIsDark] = useState(true);

    return (

        <> 
        <div className={`w-full h-full relative top-0 left-0 transition-colors duration-300 ${isDark ? "bg-black" : "bg-[#f5f5f5]"}`}>
         {/* Shared navigation with the page-level dark/light toggle. */}
         <div className="sticky top-0 z-50">
          <Nav isdark={isDark} setIsdark={setIsDark}></Nav>
         </div>
         {/* Intro section with the personal summary. */}
         <div className="max-w-5xl w-full  mx-auto top-20 md:top-40  relative h-[50%]  pt-[5.5rem]">
            <motion.h2 initial={{opacity:0,y:50,filter: "blur(5px)"}} whileInView={{opacity:1,y:0,filter: "blur(0)"}} transition={{delay:0.6,duration:0.8,ease:"linear"}} className={`font-spaceMono text-center max-w-5xl relative -mt-[2.5rem] text-5xl md:text-7xl lg:text-8xl p-6 md:p-2 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>Know About Me</motion.h2> 
            <motion.p initial={{opacity:0,y:80}} whileInView={{opacity:1,y:0}} transition={{delay:0.9,duration:0.8,ease:"linear"}} className={`font-archivo max-w-[390px] lg:max-w-[72%] p-8 md:-mt-4 -mt-8 md:max-w-[580px] mx-auto md:text-[1.6rem] lg:text-2xl text-center transition-colors duration-300 ${isDark ? "text-white" : "text-gray-700"}`}>Know About Me

I am a Full-Stack Developer with over 2 years of experience building modern, responsive, and user-friendly web applications. I work with React, Next.js, Tailwind CSS, Laravel, MySQL, and modern animation libraries to create websites, dashboards, and business software that are clean, fast, and easy to use.</motion.p>   

         </div>  
         <div  className="max-w-5xl w-full  mx-auto top-20 md:top-20 mb-45  relative h-[50%]  pt-[5.5rem]">

         {/* Scroll-based cards that summarize core areas of expertise. */}   
         <motion.h2 initial={{opacity:0,y:-50,filter: "blur(5px)"}} whileInView={{opacity:1,y:0,filter: "blur(0)"}} transition={{delay:0.6,duration:0.8,ease:"linear"}} className={`font-spaceMono text-center max-w-5xl relative mt-[2.5rem] text-3xl md:text-4xl lg:text-4xl p-6 md:p-2 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>My Expertises</motion.h2> 
          <Scroller isdark={isDark}></Scroller> 


          {/* Progress cards for frontend, backend, and communication skills. */}
          <div className="flex flex-col justify-between  -mt-8">
            <div className={`text-center text-[2.5rem] pb-8 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            <motion.h2 initial={{opacity:0,y:-50,filter: "blur(5px)"}} whileInView={{opacity:1,y:0,filter: "blur(0)"}} transition={{delay:0.6,duration:0.8,ease:"linear"}} className={`font-spaceMono text-center max-w-5xl relative mt-[2.5rem] text-3xl md:text-4xl lg:text-4xl p-6 md:p-2 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>Tech & Communication</motion.h2> 
            </div>
            <motion.div initial={{opacity:0,y:-50,filter: "blur(5px)"}} whileInView={{opacity:1,y:0,filter: "blur(0)"}} transition={{delay:0.6,duration:0.8,ease:"linear"}}   className="lg:flex  gap-0  md:right-6 md:flex md:flex-row  md:justify-cente  md:mx-auto   flex-col    relative w-full h-full overflow-hidden flex justify-center  items-center">
           <FrontendProgress isdark={isDark}></FrontendProgress>
           <BackendProgress isdark={isDark}></BackendProgress>
           <Communication isdark={isDark}></Communication> 
            </motion.div> 

          </div>
          </div>
       
          {/* Shared footer for the About page. */}
          <Footer isdark={isDark}></Footer>
          </div>
        
        </>
    )

 }
