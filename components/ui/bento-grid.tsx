import { cn } from "@/lib/utils";
import {motion} from "framer-motion";
import Image from "next/image";

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
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3",
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
  isdark?: boolean;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1,scale:1, }}
      transition={{ duration: 0.8, ease: "easeInOut",delay:0.6 }}
      viewport={{ once: true }}
      className={cn(
        `group/bento shadow-input flex h-full flex-col rounded-xl border border-neutral-200 ${isdark ? 'bg-[#1e2838]' : 'bg-[#969696]' } p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none`,
        className
      )}
    >
      {header && (
        <Image
          src={header}
          alt="card image"
          width={800}
          height={320}
          className="h-40 w-full rounded-lg object-cover"
        />
      )}

      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon ? <div className="mb-3">{icon}</div> : null}
  
        <div className={`mt-2 mb-2 font-sans  font-bold text-neutral-600 dark:text-neutral-200 ${isdark ? 'text-white' : 'text-black'}`}>
          {title}
        </div>
        <div className={`font-sans text-[14px] leading-7 font-normal text-neutral-600 dark:text-neutral-300 ${isdark ? 'text-white' : 'text-black'}`}>
          {description}
        </div>
      </div>
    </motion.div>
  );
};
