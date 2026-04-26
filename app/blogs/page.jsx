"use client"
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { useState } from "react";
import BentoGridDemo  from "../../components/ui/bento-grid-demo";

// Blog listing page that shows all articles as clickable cards.
export default function Blogs() {
const [isDark, setIsDark] = useState(true);


    return (
         <>
          {/* Sticky navigation keeps the theme switch accessible while browsing posts. */}
          <div className="sticky top-0 z-50">
            <Nav isdark={isDark} setIsdark={setIsDark} />
          </div>
        {/* Main blog grid section with all blog previews. */}
        <div className={`w-full min-h-screen ${isDark ? 'bg-[#0c0d0d]' : 'bg-[#f5f5f5]'} p-6 top-0 left-0 relative pt-30`}>
            <BentoGridDemo isdark={isDark} ></BentoGridDemo>
        </div>
        {/* Shared footer below the blog listing. */}
        <div className="relative sm:mt-0 mt-0">
          <Footer  isdark={isDark}></Footer>
        </div>
        
      </>

    )
}
