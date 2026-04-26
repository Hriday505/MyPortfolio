"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { MailIcon, PhoneCallIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function LampDemo({ isdark = true }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <LampContainer isdark={isdark}>
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 80 : 100 }}
        whileInView={{ opacity: 1, y: isMobile ? 40 : -10 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mx-auto w-full max-w-[320px] px-4 sm:max-w-[420px] sm:px-6 md:max-w-[520px] lg:max-w-[600px]"
      >
        <div className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center font-medium tracking-tight text-transparent text-[52px] sm:text-[68px] md:text-[78px] lg:text-[88px]">
          <span
            className={`block text-left text-[22px] sm:text-[24px] md:text-[58px] lg:text-[32px] ${
              isdark ? "text-white" : "text-black"
            }`}
          >
            Get In Touch
          </span>

          <div className="mt-6 w-full text-left">
            <h5
              className={`text-[16px] sm:text-[17px] md:text-[49px] lg:text-[18px] ${
                isdark ? "text-white" : "text-black"
              }`}
            >
              Contact Me
            </h5>

            <span
              className={`mt-5 flex items-center gap-3 text-[14px] sm:text-[15px] md:text-[47px] lg:text-[18px] cursor-pointer break-all ${
                isdark ? "text-white" : "text-black"
              }`}
            >
              <PhoneCallIcon
                width={18}
                className={`${isdark ? "text-white" : "text-black"} shrink-0  md:hidden lg:block`}
              />
              +91 629136891
            </span>

            <span
              className={`mt-5 flex items-center gap-3 text-[14px] sm:text-[15px] md:text-[47px] lg:text-[18px] cursor-pointer break-all ${
                isdark ? "text-white" : "text-black"
              }`}
            >
              <MailIcon
                width={18}
                className={`${isdark ? "text-white" : "text-black"} shrink-0 md:hidden lg:block`}
              />
              dhriday505@gmail.com
            </span>
          </div>

          <div className="mt-10 w-full text-left">
            <h5
              className={`text-[16px] sm:text-[17px] md:text-[49px] lg:text-[18px] ${
                isdark ? "text-white" : "text-black"
              }`}
            >
              Social Media
            </h5>

            <div className="mt-5 flex items-center gap-5 text-[22px] sm:text-[24px] md:text-[45px] lg:text-[22px]">
              <a href="https://www.linkedin.com/in/hriday-das-368b74187/">
              <FaGithub
                className={`${isdark ? "text-white" : "text-black"} cursor-pointer`}
              />
              </a>

              <a href="https://github.com/Hriday505">
              <FaLinkedin
                className={`${isdark ? "text-white" : "text-black"} cursor-pointer`}
              />

              </a>
              {/* <FaInstagram
                className={`${isdark ? "text-white" : "text-black"} cursor-pointer`}
              /> */}
            </div>
          </div>
        </div>
      </motion.div>
    </LampContainer>
  );
}
