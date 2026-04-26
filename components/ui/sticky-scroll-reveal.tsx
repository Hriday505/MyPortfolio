"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const LINEAR_GRADIENTS = [
  "linear-gradient(to bottom right, #06b6d4, #10b981)",
  "linear-gradient(to bottom right, #ec4899, #6366f1)",
  "linear-gradient(to bottom right, #f97316, #eab308)",
];

export const StickyScroll = ({
  content,
  contentClassName,
  isdark = true,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
  isdark?: boolean;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const [backgroundGradient, setBackgroundGradient] = useState(
    LINEAR_GRADIENTS[0],
  );

  useEffect(() => {
    setBackgroundGradient(LINEAR_GRADIENTS[activeCard % LINEAR_GRADIENTS.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: isdark ? "#000000" : "#ffffff",
      }}
      whileInView={{opacity:1}}
      className={`mb-12 flex h-[26rem] justify-center lg:space-x-80 md:space-x-30 overflow-y-auto rounded-md p-10 transition-colors duration-300 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${isdark ? "" : "border border-black/10 shadow-sm"}`}
      ref={ref}
    >
      <div className="div relative flex  items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={`text-2xl font-bold transition-colors duration-300 ${isdark ? "text-slate-100" : "text-slate-900"}`}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={`text-kg mt-10 max-w-sm transition-colors duration-300 ${isdark ? "text-slate-300" : "text-slate-600"}`}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
