import { NoiseBackground } from "@/components/ui/noise-background";
import {motion} from "framer-motion";
import { useRef } from "react";

export function NoiseBackgroundDemo() {
  const buttonRef = useRef(null)

  return (
    <motion.div ref={buttonRef}  initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{delay:0.6, duration:0.5, ease:'easeIn'}} className="flex justify-start">
      <NoiseBackground
        containerClassName="inline-flex rounded-full p-2"
        gradientColors={[
          "rgb(255, 100, 150)",
          "rgb(100, 150, 255)",
          "rgb(255, 200, 100)",
        ]}>
        <button
          className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-8 py-3 text-center text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
         Why Hire Me 
        </button>
      </NoiseBackground>
    </motion.div>
  );
}
