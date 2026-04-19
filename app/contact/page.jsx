
"use client"
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { useState } from "react";
import ContactForm from '../../components/ui/signup-form-demo'
import LampText from "../../components/ui/lamp-demo"


export default function Contact() {

    const [isDark, setIsDark] = useState(true);


    return (

       <>
       <div className="sticky top-0 z-50 mb-6">
                   <Nav isdark={isDark} setIsdark={setIsDark} />
                 </div>
               <div className={`relative  flex-direction lg:flex-row flex-col lg:flex -mt-12 md:-mt-7  h-full w-full lg:pt-8 -pt-1.5 items-center justify-center overflow-hidden ${isDark ? 'bg-[#02070d]' : 'bg-white'}  pr-0 lg:pr-20`}>
                   <LampText isdark={isDark} />
                <ContactForm isdark={isDark}  />                
               </div> 
               <div className="relative sm:mt-0 mt-0">
       <Footer  isdark={isDark}></Footer>
       </div>
       </>


    )
}