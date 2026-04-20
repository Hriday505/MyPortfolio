"use client";

import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Preloader from "./Preloader";
import Hero from "../Components/Hero";
import Slider from "../Components/Slider";
import Aboutme from "../Components/Aboutme";
import Experiance from "../Components/Experiance";
import {Skills} from "../Components/Skills";
import {Hire} from "../Components/Hire";
import Footer from "../Components/Footer";
import { getHasShownHomePreloader, setHasShownHomePreloader} from '../../lib/homepreloader'

const Home = () => {
  const [isDark, setIsDark] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{

    const alreadyShown = getHasShownHomePreloader();

    if(!alreadyShown){

      setLoading(true);
      setHasShownHomePreloader(true)
    }

    const timer = setTimeout(() => {

      setLoading(false)

    }, (3500));

    return ()=> clearTimeout(timer)

  },[])

  if(loading){

    return  <Preloader></Preloader>

  }

  return (
    <>
        <div
          className={`w-full m-0 p-0 sm:h-[100vh] h-[120vh] overflow-x-hidden
           ${isDark ? " bg-gray-100" : "bg-black relative "} `}
        >
          <div>
            <Nav isdark={isDark} setIsdark={setIsDark}></Nav>
            <Hero isdark={isDark}></Hero>
            <Slider isdark={isDark}></Slider>
          </div>

          <Aboutme isdark={isDark}></Aboutme>
          <Experiance  isdark={isDark} ></Experiance>
          <Skills isdark={isDark}></Skills>
          <Hire isdark={isDark}></Hire>
          <Footer isdark={isDark}></Footer>
        </div>

    </>
  );
};

export default Home;
