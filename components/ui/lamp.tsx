"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function LampDemo({ isdark = true }) {
  return (
    <LampContainer isdark={isdark}>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "mt-8 bg-gradient-to-br py-4 bg-clip-text text-center font-medium tracking-tight text-transparent md:text-7xl",
          isdark
            ? "from-slate-300 to-slate-500"
            : "from-slate-700 to-slate-900"
        )}
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
  isdark = true,
}: {
  children: React.ReactNode;
  className?: string;
  isdark?: boolean;
}) => {
  const baseBg = isdark ? "bg-[#02070d]" : "bg-white";
  const maskBg = isdark ? "bg-[#02070d]" : "bg-white";

  return (
    <div
      className={cn(
        `relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md ${baseBg}`,
        className
      )}
    >
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div
            className={cn(
              "absolute bottom-0 left-0 z-20 h-40 w-[100%] [mask-image:linear-gradient(to_top,white,transparent)]",
              maskBg
            )}
          />
          <div
            className={cn(
              "absolute bottom-0 left-0 z-20 h-[100%] w-40 [mask-image:linear-gradient(to_right,white,transparent)]",
              maskBg
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div
            className={cn(
              "absolute bottom-0 right-0 z-20 h-[100%] w-40 [mask-image:linear-gradient(to_left,white,transparent)]",
              maskBg
            )}
          />
          <div
            className={cn(
              "absolute bottom-0 right-0 z-20 h-40 w-[100%] [mask-image:linear-gradient(to_top,white,transparent)]",
              maskBg
            )}
          />
        </motion.div>

        <div
          className={cn(
            "absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl",
            maskBg
          )}
        ></div>

        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

        <div
          className={cn(
            "absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full blur-3xl",
            isdark ? "bg-cyan-500 opacity-50" : "bg-cyan-300 opacity-40"
          )}
        ></div>

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl",
            isdark ? "bg-cyan-400" : "bg-cyan-300"
          )}
        ></motion.div>

        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem]",
            isdark ? "bg-cyan-400" : "bg-cyan-500"
          )}
        ></motion.div>

        <div
          className={cn(
            "absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]",
            maskBg
          )}
        ></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};