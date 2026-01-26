"use client";

import React, { useState } from "react";
import Nav from "../Components/Nav";
import Preloader from "./Preloader";
import Hero from "../Components/Hero";
import Slider from "../Components/Slider";
import Aboutme from "../Components/Aboutme";
import Experiance from "../Components/Experiance";
import Skills from "../Components/Skills";
import Hire from "../Components/Hire";
import Footer from "../Components/Footer";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <Preloader>
        <div
          className={`w-full m-0 p-0 sm:h-[100vh] h-[70vh] overflow-x-hidden
           ${isDark ? " bg-gray-100" : "bg-black relative "} `}
        >
          <div>
            <Nav isdark={isDark} setIsdark={setIsDark}></Nav>
            <Hero isdark={isDark}></Hero>
            <Slider isdark={isDark}></Slider>
          </div>

          <Aboutme isdark={isDark}></Aboutme>
          <Experiance></Experiance>
          <Skills></Skills>
          <Hire></Hire>
          <Footer></Footer>
        </div>
      </Preloader>
    </>
  );
};

export default Home;
