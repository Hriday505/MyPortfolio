"use client"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import {motion} from 'framer-motion' 
import Scroller from '../../components/ui/sticky-scroll-reveal-demo'
import  FrontendProgress from '../../components/ui/frontend-card'
import BackendProgress from '../../components/ui/backend-card'
import Communication from '../../components/ui/communication'

 export default function  About(){


    return (

        <> 
        <div className="w-full bg-black h-full relative top-0 left-0">
         <Nav></Nav>
               {/** intro */}
         <div className="max-w-5xl w-full  mx-auto top-20 md:top-40  relative h-[50%]  pt-[5.5rem]">
            <motion.h2 initial={{opacity:0,y:50,filter: "blur(5px)"}} whileInView={{opacity:1,y:0,filter: "blur(0)"}} transition={{delay:0.6,duration:0.8,ease:"linear"}} className="text-white text-center max-w-5xl relative -mt-[2.5rem] text-5xl md:text-7xl lg:text-8xl p-6 md:p-2 ">Know About Me</motion.h2> 
            <motion.p initial={{opacity:0,y:80}} whileInView={{opacity:1,y:0}} transition={{delay:0.9,duration:0.8,ease:"linear"}} className="text-white max-w-[390px]   lg:max-w-[72%] p-8 md:-mt-4 -mt-8 md:max-w-[580px] mx-auto md:text-[1.6rem] lg:text-2xl text-center">a passionate Frontend Developer with over 2 years of experience crafting clean, responsive, and user-centric websites. I specialize in turning complex designs into functional, high-performance web applications</motion.p>   

         </div>  
               {/** intro end */}
         <div  className="max-w-5xl w-full  mx-auto top-20 md:top-20 mb-45  relative h-[50%]  pt-[5.5rem]">

         {/** expertise cards */}   
         <motion.h2 initial={{opacity:0,y:-50,filter: "blur(5px)"}} whileInView={{opacity:1,y:0,filter: "blur(0)"}} transition={{delay:0.6,duration:0.8,ease:"linear"}} className="text-white text-center max-w-5xl relative mt-[2.5rem] text-3xl md:text-4xl lg:text-4xl p-6 md:p-2 ">My Expertises</motion.h2> 
          <Scroller></Scroller> 
         {/** expertise cards  end */}  


          {/** skill cards */}
          <div className="flex flex-col justify-between  -mt-8">
            <div className="text-white text-center text-[2.5rem] pb-8">
            <motion.h2 initial={{opacity:0,y:-50,filter: "blur(5px)"}} whileInView={{opacity:1,y:0,filter: "blur(0)"}} transition={{delay:0.6,duration:0.8,ease:"linear"}} className="text-white text-center max-w-5xl relative mt-[2.5rem] text-3xl md:text-4xl lg:text-4xl p-6 md:p-2 ">Tech & Communication</motion.h2> 
            </div>
            <motion.div initial={{opacity:0,y:-50,filter: "blur(5px)"}} whileInView={{opacity:1,y:0,filter: "blur(0)"}} transition={{delay:0.6,duration:0.8,ease:"linear"}}   className="lg:flex  gap-0  md:right-6 md:flex md:flex-row  md:justify-cente  md:mx-auto   flex-col    relative w-full h-full overflow-hidden flex justify-center  items-center">
           <FrontendProgress></FrontendProgress>
           <BackendProgress></BackendProgress>
           <Communication></Communication> 
            </motion.div> 

          </div>
            {/** skill cards  end*/}
          </div>
       
          <Footer ></Footer>
          </div>
        
        </>
    )

 }