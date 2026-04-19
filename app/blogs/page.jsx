"use client"
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { useState } from "react";
import BentoGridDemo  from "../../components/ui/bento-grid-demo";

export default function Blogs() {
const [isDark, setIsDark] = useState(true);


    return (
     <>
        
          <div className="sticky top-0 z-50">
            <Nav isdark={isDark} setIsdark={setIsDark} />
          </div>
        <div className={`w-full ${isDark ? 'bg-[#0c0d0d]' : 'bg-[#f5f5f5]'}  sm:h-[100vh] h-[190vh] p-6  top-0 left-0 relative pt-30`}>
            <BentoGridDemo isdark={isDark} ></BentoGridDemo>
        </div>
        <div className="relative sm:mt-0 mt-0">
          <Footer  isdark={isDark}></Footer>
        </div>
        
     </>

    )
}