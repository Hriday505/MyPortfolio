import { cn } from "@/lib/utils";
import {motion} from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  isdark = true,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1,scale:1, }}
      transition={{ duration: 0.8, ease: "easeInOut",delay:0.6 }}
      viewport={{ once: true }}
      className={cn(
        `group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 ${isdark ? 'bg-[#1e2838]' : 'bg-[#969696]' } p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none`,
        className
      )}
    >
      {header && (
        <img
          src={header}
          alt="card image"
          className="h-40 w-full rounded-lg object-cover"
        />
      )}

      <div className="transition duration-200 group-hover/bento:translate-x-2">
  
        <div className={`mt-2 mb-2 font-sans  font-bold text-neutral-600 dark:text-neutral-200 ${isdark ? 'text-white' : 'text-black'}`}>
          {title}
        </div>
        <div className={`font-sans text-[14px] font-normal text-neutral-600 dark:text-neutral-300 ${isdark ? 'text-white' : 'text-black'}`}>
          {description}
        </div>
      </div>
    </motion.div>
  );
};