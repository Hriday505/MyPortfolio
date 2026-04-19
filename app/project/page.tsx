"use client"
import { HoverEffect } from "../Components/ui/card-hover-effect";
 import Nav from "../Components/Nav";
 import Footer from "../Components/Footer";
 import { useState } from "react";
export default function CardHoverEffectDemo() {

const [isDark, setIsDark] = useState(true);


  return (
    <>
    <div className={`w-full  h-[100vh] ${isDark ? 'bg-[#0c0d0d]' : 'bg-gray-100'}`}>

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
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];